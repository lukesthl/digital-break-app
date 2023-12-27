import AppIntents
import UIKit

struct OpenAppIntent: AppIntent {
  
  static var title: LocalizedStringResource = "Open App"
  
  static var openAppWhenRun: Bool = true
  
  @MainActor
  func perform() async throws -> some IntentResult {
    return .result()
  }
}
