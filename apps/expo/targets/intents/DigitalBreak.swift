import AppIntents

struct DigitalBreak: AppIntent {
  static var title: LocalizedStringResource = "Activate Digital Break when an app opens"

  static var description =
    IntentDescription(
      "This shortcut starts a breathing exercise and asks if you really want to continue in the selected app"
    )

  static var openAppWhenRun: Bool = true

  @Parameter(title: "App")
  var appPrompt: String?

  static var parameterSummary: some ParameterSummary {
    Summary("Digital Break when \(\.$appPrompt) opens")
  }

  @MainActor
  func perform() async throws -> some ProvidesDialog {
    
    let RCTStorageDirectory = "RCTAsyncLocalStorage_V1"
    let RCTManifestFileName = "manifest.json"

    let fileManager = FileManager.default

    let appSupportDirectory = fileManager.urls(
      for: .applicationSupportDirectory, in: .userDomainMask
    ).first

    let mySupportDirectory = appSupportDirectory!.appendingPathComponent(
      Bundle.main.bundleIdentifier!)

    let storageDirectory = mySupportDirectory.appendingPathComponent(RCTStorageDirectory)

    let storageFile = storageDirectory.appendingPathComponent(RCTManifestFileName)

    var dict = [] as? [String: String]
    do {

      let stringFromFile = try String(contentsOf: storageFile, encoding: .utf8)

      let data = stringFromFile.data(using: .utf8, allowLossyConversion: false)

      let json = try? JSONSerialization.jsonObject(with: data!, options: .mutableContainers)
      dict = json as? [String: String]
    } catch {

      print("Failed to read manifest, creating new..")

    }
    if dict == nil {
      dict = [:]
    }
    dict!["openedApp"] = appPrompt
    if dict != nil {
      do {
        let stringified = asString(dict: dict!)
        if !fileManager.fileExists(atPath: storageDirectory.path) {
          try fileManager.createDirectory(
            atPath: storageDirectory.path, withIntermediateDirectories: true, attributes: nil)

        }
        try stringified.write(to: storageFile, atomically: true, encoding: .utf8)
        let input = try String(contentsOf: storageFile)
        print(input)
      } catch {
        print(error)
      }

    }
    return .result(dialog: "We blocked this app for you")
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