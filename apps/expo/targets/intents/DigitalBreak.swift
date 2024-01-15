import AppIntents
import CommonCrypto
import Foundation
import UIKit

struct AppInfo: Decodable {
  struct ItemSettings: Decodable {
    let breakDurationSeconds: Int
    let quickAppSwitchDurationMinutes: Int
    let dailyTimeSpentMinutes: Int
  }

  let name: String
  let active: Bool
  let iconKey: String
  let id: String
  let settings: ItemSettings
  let key: String
}
struct Manifest: Decodable {
  let apps: String
}

struct AppIntentPayload: Codable {
  var openedApp: String
  var timestamp: Double
  var event: Event
}

enum Event: String, Codable {
  case breakStart = "break-start"
  case appReopen = "app-reopen"
  case breakSkip = "break-skip"
}

typealias AppInfoList = [String: AppInfo]

struct DigitalBreak: AppIntent {
  static var title: LocalizedStringResource = "Check Digital Break"

  static var description =
    IntentDescription(
      "This shortcut checks if you need a digital break and returns true."
    )

  static var openAppWhenRun: Bool = false

  @Parameter(title: "App")
  var appPrompt: String?

  static var parameterSummary: some ParameterSummary {
    Summary("Digital Break when \(\.$appPrompt) opens")
  }

  func getStorageDirAndFile(fileName: String) -> (URL, URL) {
    let RCTStorageDirectory = "RCTAsyncLocalStorage_V1"

    let fileManager = FileManager.default

    let appSupportDirectory = fileManager.urls(
      for: .applicationSupportDirectory, in: .userDomainMask
    ).first

    let mySupportDirectory = appSupportDirectory!.appendingPathComponent(
      Bundle.main.bundleIdentifier!)

    let storageDirectory = mySupportDirectory.appendingPathComponent(RCTStorageDirectory)

    let storageFile = storageDirectory.appendingPathComponent(fileName)
    return (storageDirectory, storageFile)
  }

  func MD5(string: String) -> String {
    let digestLength = Int(CC_MD5_DIGEST_LENGTH)
    let result = UnsafeMutablePointer<CUnsignedChar>.allocate(capacity: digestLength)

    let strBytes = string.cString(using: .utf8)
    let strLen = CC_LONG(string.lengthOfBytes(using: .utf8))

    CC_MD5(strBytes, strLen, result)

    var hash = ""
    for i in 0..<digestLength {
      hash += String(format: "%02x", result[i])
    }

    result.deallocate()

    return hash
  }

  func getAppIntentPayload() -> AppIntentPayload? {
    let RCTStorageDirectory = "RCTAsyncLocalStorage_V1"
    let fileManager = FileManager.default

    guard
      let appSupportDirectory = fileManager.urls(
        for: .applicationSupportDirectory, in: .userDomainMask
      ).first
    else {
      print("Couldn't find application support directory.")
      return nil
    }

    let mySupportDirectory = appSupportDirectory.appendingPathComponent(
      Bundle.main.bundleIdentifier!)
    let storageDirectory = mySupportDirectory.appendingPathComponent(RCTStorageDirectory)

    let appIntentFile = storageDirectory.appendingPathComponent("appintent.json")
    do {
      let data = try Data(contentsOf: appIntentFile)
      let decoder = JSONDecoder()
      let appIntentPayload = try decoder.decode(AppIntentPayload.self, from: data)
      return appIntentPayload
    } catch {
      print("Error: \(error)")
    }
    return nil
  }

  func fetchAppItem(with name: String) -> AppInfo? {
    let RCTStorageDirectory = "RCTAsyncLocalStorage_V1"
    let fileManager = FileManager.default

    guard
      let appSupportDirectory = fileManager.urls(
        for: .applicationSupportDirectory, in: .userDomainMask
      ).first
    else {
      print("Couldn't find application support directory.")
      return nil
    }

    let mySupportDirectory = appSupportDirectory.appendingPathComponent(
      Bundle.main.bundleIdentifier!)
    let storageDirectory = mySupportDirectory.appendingPathComponent(RCTStorageDirectory)

    let manifestFile = storageDirectory.appendingPathComponent("manifest.json")
    let appsFile = storageDirectory.appendingPathComponent(MD5(string: "apps"))
    let decoder = JSONDecoder()

    do {
      if let data = try? Data(contentsOf: manifestFile),
        let manifest = try? decoder.decode(Manifest.self, from: data),
        let appsData = manifest.apps.data(using: .utf8),
        let apps = try? decoder.decode([AppInfo].self, from: appsData)
      {
        return apps.first(where: { $0.name == name })
      }

      if let data = try? Data(contentsOf: appsFile),
        let apps = try? decoder.decode([AppInfo].self, from: data)
      {
        return apps.first(where: { $0.name == name })
      }
    } catch {
      print("Error while fetching apps: \(error)")
    }

    return nil
  }

  @MainActor
  func perform() async throws -> some IntentResult & ReturnsValue<Bool> {
    var appIntentPayload = getAppIntentPayload()
    var appInfo = fetchAppItem(with: appPrompt!)

    var isActive = true
    var outOfTimeRange = false
    do {
      if appInfo != nil {
        isActive = appInfo!.active

        let lastOpen = appIntentPayload!.timestamp
        let quickAppSwitchDurationAsTimestamp =
          Double(appInfo!.settings.quickAppSwitchDurationMinutes * 60)
        let timeSinceLastOpen = Date().timeIntervalSince1970 - lastOpen
        let timeSinceLastOpenMinutes = timeSinceLastOpen / 60
        print("timeSinceLastOpen", timeSinceLastOpenMinutes)
        outOfTimeRange =
          Double(appInfo?.settings.quickAppSwitchDurationMinutes ?? 0)
          <= Double(
            timeSinceLastOpenMinutes)
      }
    } catch {
      print("Error while fetching apps: \(error)")
    }
    if appIntentPayload != nil && isActive && appIntentPayload?.event == Event.breakStart {
      return .result(
        value: true)
    }else if (appIntentPayload == nil) {
      appIntentPayload = AppIntentPayload(
        openedApp: appPrompt!, timestamp: Date().timeIntervalSince1970, event: Event.breakStart)
    }else {
      appIntentPayload?.event = Event.breakSkip
    }
    let (storageDirectory, storageFile) = getStorageDirAndFile(fileName: "appintent.json")
    let fileManager = FileManager.default
    do {
      let jsonEncoder = JSONEncoder()
      let jsonData = try jsonEncoder.encode(appIntentPayload)
      if !fileManager.fileExists(atPath: storageDirectory.path) {
        try fileManager.createDirectory(
          atPath: storageDirectory.path, withIntermediateDirectories: true, attributes: nil)
      }
      let stringified = String(data: jsonData, encoding: .utf8)!
      try stringified.write(to: storageFile, atomically: true, encoding: .utf8)
    } catch {
      print(error)
    }
      
    return .result(
      value: appIntentPayload?.event != Event.breakSkip
)
  }
  func asString(dict: [String: String]) -> String {
    do {
      let data = try JSONSerialization.data(withJSONObject: dict, options: .prettyPrinted)
      return String(data: data, encoding: String.Encoding.utf8) ?? ""
    } catch {
      return ""
    }
  }

}
