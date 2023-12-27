import AppIntents
import UIKit

struct EmptyAppIntent: AppIntent {

  static var title: LocalizedStringResource = "Empty App"

  static var openAppWhenRun: Bool = false

  @MainActor
  func perform() async throws -> some IntentResult {
    return .result()
  }
}
