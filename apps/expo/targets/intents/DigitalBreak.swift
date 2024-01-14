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
  var openedApp: String?
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
    var canOpenApp = true
    do {
      if appIntentPayload?.openedApp != nil && appInfo != nil {
        canOpenApp = appInfo!.active
        if canOpenApp,
          let payload = appIntentPayload,
          let openedApp = payload.openedApp,
          !openedApp.contains("_app-reopen")
        {
          let lastOpen = appIntentPayload?.openedApp?.split(separator: "_")
          let lastOpenTime = Double(lastOpen![1])!
          let quickAppSwitchDurationAsTimestamp =
            Double(appInfo!.settings.quickAppSwitchDurationMinutes * 60)
          let timeSinceLastOpen = Date().timeIntervalSince1970 - lastOpenTime
          let timeSinceLastOpenMinutes = timeSinceLastOpen / 60
          print("timeSinceLastOpen", timeSinceLastOpenMinutes)
          canOpenApp =
            Double(appInfo?.settings.quickAppSwitchDurationMinutes ?? 0)
            < Double(
              timeSinceLastOpenMinutes)
        }
      }
    } catch {
      print("Error while fetching apps: \(error)")
    }
    if canOpenApp {
      if let payload = appIntentPayload,
        let openedApp = payload.openedApp,
        openedApp.contains("_app-reopen")
      {
        appIntentPayload?.openedApp = nil
        print("dont open app because it was just reopened")
      } else {
        let app = appPrompt
        appIntentPayload = AppIntentPayload(
          openedApp: "\(app!)_\(Date().timeIntervalSince1970)_break-start")
        print("open app")
      }
      if appIntentPayload != nil {
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
      }
    } else {
      print("dont open app because settings disallow it")
    }

    return .result(
      value: canOpenApp && appIntentPayload?.openedApp != nil)
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
