import pdfjsLib from "pdfjs-dist";

interface PdfTextItem {
  str: string;
  x: number;
  y: number;
  h: number;
  w: number;
}

export interface ExtractedPage {
  lines: string[];
  items: PdfTextItem[];
}

export interface ExtractedPdf {
  pages: ExtractedPage[];
  fullText: string;
}

interface PdfJsTextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
}

interface PdfJsPage {
  getTextContent: () => Promise<{ items: PdfJsTextItem[] }>;
}

interface PdfJsPdf {
  numPages: number;
  getPage: (pageNum: number) => Promise<PdfJsPage>;
}

const itemToPlain = (item: PdfJsTextItem): PdfTextItem => ({
  str: String(item.str ?? ""),
  x: item.transform[4] ?? 0,
  y: item.transform[5] ?? 0,
  h: Math.abs((item.transform[3] ?? 0) - (item.transform[1] ?? 0)) || 10,
  w: item.width ?? 0,
});

const LINE_TOLERANCE = 5;

function groupItemsIntoLines(items: PdfTextItem[]): PdfTextItem[][] {
  const nonEmpty = items.filter((it) => it.str.trim());
  const lineMap = new Map<number, PdfTextItem[]>();

  for (const item of nonEmpty) {
    let found = false;
    for (const [yKey, lineItems] of lineMap) {
      if (Math.abs(yKey - item.y) < LINE_TOLERANCE) {
        lineItems.push(item);
        found = true;
        break;
      }
    }
    if (!found) {
      lineMap.set(item.y, [item]);
    }
  }

  return [...lineMap.values()]
    .map((lineItems) => lineItems.sort((a, b) => a.x - b.x))
    .sort((a, b) => (b[0]?.y ?? 0) - (a[0]?.y ?? 0));
}

function linesToText(lines: PdfTextItem[][]): string[] {
  return lines.map((line) =>
    line
      .reduce((acc, item, i) => {
        if (i === 0) return item.str;
        const prev = line[i - 1]!;
        const gap = item.x - (prev.x + prev.w);
        return acc + (gap < 3 ? "" : " ") + item.str;
      }, "")
      .trim()
  );
}

interface GetDocumentParams {
  data: ArrayBuffer;
  disableWorker: boolean;
}

interface LoadingTask {
  promise: Promise<PdfJsPdf>;
}

export async function extractPdfText(arrayBuffer: ArrayBuffer): Promise<ExtractedPdf> {
  const loadingTask = pdfjsLib.getDocument({
    data: arrayBuffer,
    disableWorker: true,
  } as GetDocumentParams) as unknown as LoadingTask;
  const pdf = await loadingTask.promise;

  const pages: ExtractedPage[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const items = textContent.items.map((item) => itemToPlain(item));
    const grouped = groupItemsIntoLines(items);
    const lineTexts = linesToText(grouped);

    pages.push({
      lines: lineTexts,
      items: grouped.flat(),
    });
  }

  const fullText = pages.map((p) => p.lines.join("\n")).join("\n\n");

  return { pages, fullText };
}
