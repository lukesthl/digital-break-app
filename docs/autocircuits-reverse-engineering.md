# AutoCircuits Reverse Engineering Notes

## Endpoint Roles

- `POST https://www.autocircuits.org/initCirOptions.php`
  - Body: `q=parts|chapters|shuffle&k=<random-key>`
  - Returns option descriptors for the selected mode.
- `POST https://www.autocircuits.org/launchMatlab.php`
  - Body: `q=<JSON-stringified option payload>`
  - Returns a short-lived PDF URL in `downLoadFile` plus MATLAB/status flags.
- `GET https://www.autocircuits.org/checkFile.php?q=<pdf-filename>`
  - Returns `1` while the temp directory exists and generation is queued/running.
  - Returns `2` when the generated PDF is actually available for download.
  - Returns `5` when AutoCircuits hit a generation error.
- `POST https://www.autocircuits.org/clearCir.php`
  - Source-owned cleanup endpoint for a generated circuit.
- `POST https://www.autocircuits.org/clearDir.php`
  - Source-owned cleanup endpoint for generated temporary directory state.

## Launch Payload Shape

```json
{
  "generalOptions_chapter": "DC_Random",
  "circuitOptions_type": "numeric",
  "circuitOptions_numberType": "integer",
  "generalOptions_difficulty": "medium",
  "circuitOptions_allowControlledSources": "ExcludeCS",
  "circuitOptions_allowOpAmps": "ExcludeOA",
  "circuitOptions_allowCouplings": "ExcludeK",
  "circuitOptions_language": "EN",
  "generalOptions_key": "abc123"
}
```

## Normalized App Contract

The app does not render AutoCircuits-specific controls on the break screen. The source adapter emits a `ProblemDocument`:

- title
- explanatory description
- prompt text
- rendered PDF page asset(s), preferably from bytes returned by the broker rather than a remote URL
- answer slots with grading rules
- source footer/license
- source metadata such as mode, chapter, difficulty, and remote PDF URL

The live broker response must include the generated PDF itself (`pdfBase64`) and a rendered first-page PNG (`imageBase64`). URLs may be included for debugging, but a URL-only response is not considered a valid live source response.

The current mobile implementation uses a cached rendered PDF page and answer key fixture because AutoCircuits embeds answers inside the short-lived PDF solution page rather than returning answer JSON. Fresh live PDF parsing should stay inside the AutoCircuits adapter.

## PDF Text Fixture

`pdftotext` output from the live sample follows this useful shape:

```text
Problem: find i2, i5, i6.

Solution
i2 = 5 A
i5 = -2 A
i6 = 4 A
```

The app parser currently consumes this extracted text shape and emits answer slots with numeric-unit grading. Binary PDF rendering/parsing is intentionally kept out of the break screen.

## Current Adapter Behavior

- The AutoCircuits source posts to `launchMatlab.php` using the selected source prefs.
- When a `downLoadFile` is returned, the adapter checks `checkFile.php` before exposing it.
- If the file is ready, the normalized circuit asset receives a `sourceUrl` labeled `Open live PDF`.
- The visible circuit figure still uses the cached rendered sample image until a native PDF renderer/extractor is added.
- The break screen can open any source image asset in a larger modal without knowing which source produced it.
