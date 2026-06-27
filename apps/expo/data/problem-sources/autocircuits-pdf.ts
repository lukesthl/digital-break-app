import type { ExtractedPdf } from "./pdf-text-extractor";
import type { ProblemAnswerSlot } from "./types";

interface PdfTextItem {
  str: string;
  x: number;
  y: number;
  h: number;
  w: number;
}

interface ParsedAnswer {
  id: string;
  expected: string;
}

export interface ParsedAutoCircuitsResult {
  prompt: string;
  answers: ProblemAnswerSlot[];
}

const normalizeText = (text: string): string =>
  text
    .normalize("NFKC")
    .replace(/\uFB01/g, "fi")
    .replace(/[−–—]/g, "-")
    .replace(/\u2212/g, "-")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();

const skipWordPattern = /^(with|and|the|for|is|be|by|that|this|work|licensed|creative|commons|attribution|noncommercial|international|license|time|constant|generated|autoCircuits|tional)$/i;

function extractPromptFromPage1(lines: string[]): string {
  const fullText = normalizeText(lines.join(" "));
  const match = fullText.match(/Problem:\s*(.+?)(?:\n|$)/i);
  return match?.[1]?.trim() ?? "";
}

function groupIntoLines(items: PdfTextItem[]): PdfTextItem[][] {
  const nonEmpty = items.filter((it) => it.str.trim());
  const lineMap = new Map<number, PdfTextItem[]>();

  for (const item of nonEmpty) {
    let found = false;
    for (const [yKey, lineItems] of lineMap) {
      if (Math.abs(yKey - item.y) < 5) {
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
    .map((l) => l.sort((a, b) => a.x - b.x))
    .sort((a, b) => (b[0]?.y ?? 0) - (a[0]?.y ?? 0));
}

function extractAnswersFromItems(solutionItems: PdfTextItem[], solY: number): ParsedAnswer[] {
  const answers: ParsedAnswer[] = [];

  const items = solutionItems.filter(
    (it, i) => i > solutionItems.findIndex((x) => x.str.toLowerCase() === "solution") &&
      it.y < solY - 5 && it.y > 50 && it.str.trim()
  );

  const lines = groupIntoLines(items);
  if (lines.length === 0) return answers;

  for (const line of lines) {
    const eqIndices: number[] = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i]!.str.includes("=")) eqIndices.push(i);
    }

    for (let ei = 0; ei < eqIndices.length; ei++) {
      const eqIdx = eqIndices[ei]!;
      const eqItem = line[eqIdx]!;

      let varStart = 0;
      if (ei > 0) {
        const prevEqIdx = eqIndices[ei - 1]!;
        varStart = prevEqIdx + 1;
        let prevEnd = prevEqIdx + 1;
        while (prevEnd < eqIdx && prevEnd < line.length) {
          const gap = prevEnd > prevEqIdx + 1
            ? line[prevEnd]!.x - line[prevEnd - 1]!.x
            : 0;
          if (gap > 25) break;
          prevEnd++;
        }
        varStart = Math.max(varStart, prevEnd);
      }
      varStart = Math.min(varStart, eqIdx - 1);

      const varItems = line.slice(varStart, eqIdx);
      const varName = varItems
        .map((it) => it.str)
        .join("")
        .replace(/\s+/g, "")
        .replace(/[•:]/g, "")
        .trim();

      if (!varName || varName.length > 25) continue;
      if (skipWordPattern.test(varName)) continue;

      const valItems: PdfTextItem[] = [];
      for (let j = eqIdx + 1; j < line.length; j++) {
        if (ei + 1 < eqIndices.length && j >= eqIndices[ei + 1]! - 1) break;
        if (!line[j]!.str.includes("=")) valItems.push(line[j]!);
      }

      const valXMin = eqItem.x + eqItem.w - 10;
      const valXMax = valItems.length > 0
        ? valItems[valItems.length - 1]!.x + 30
        : valXMin + 200;

      const fracItems: (PdfTextItem & { lineY: number })[] = [];
      for (const fLine of lines) {
        if (fLine === line) continue;
        if (Math.abs((fLine[0]?.y ?? 0) - (line[0]?.y ?? 0)) > 15) continue;
        for (const fItem of fLine) {
          if (fItem.x > valXMin - 15 && fItem.x < valXMax + 30 && !fItem.str.includes("=")) {
            fracItems.push({ ...fItem, lineY: fLine[0]?.y ?? 0 });
          }
        }
      }

      const unitCands: PdfTextItem[] = [];
      const valueCands: PdfTextItem[] = [];
      for (const item of valItems) {
        const t = item.str.trim();
        if (t && /^[a-zA-ZμΩ°%S]+$/.test(t) && t.length <= 3 && item.x > eqItem.x + 30) {
          unitCands.push(item);
        } else if (t) {
          valueCands.push(item);
        }
      }

      let value = valueCands
        .map((it) => it.str)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      if (fracItems.length > 0) {
        fracItems.sort((a, b) => b.lineY - a.lineY);
        const groups: { y: number; strs: string[] }[] = [];
        let cur: { y: number; strs: string[] } | null = null;
        for (const fi of fracItems) {
          if (!cur || Math.abs(cur.y - fi.lineY) > 4) {
            cur = { y: fi.lineY, strs: [] };
            groups.push(cur);
          }
          cur.strs.push(fi.str.trim());
        }

        if (groups.length >= 2) {
          const num = groups[0]!.strs.join("").replace(/\s+/g, "").replace(/\u2212/g, "-");
          const den = groups[groups.length - 1]!.strs.join("").replace(/\s+/g, "").replace(/\u2212/g, "-");
          if (num && den) value = num + "/" + den;
        } else if (valueCands.length === 0 && groups.length === 1) {
          value = groups[0]!.strs.join(" ").replace(/\s+/g, " ");
        }
      }

      const unit = unitCands.map((it) => it.str.trim()).join(" ").trim();
      const expected = unit ? value + " " + unit : value;

      if (!value || value.length > 80) continue;

      answers.push({
        id: varName,
        expected: normalizeText(expected).replace(/\s+/g, " "),
      });
    }
  }

  return answers;
}

const unitHintFromExpected = (expected: string): string => {
  const unitMatch = expected.match(/[a-zA-ZµμΩ°%/]+$/);
  return unitMatch ? `e.g. 0 ${unitMatch[0]}` : "e.g. 0";
};

export const parseAutoCircuitsPdfItems = (extracted: ExtractedPdf): ParsedAutoCircuitsResult | null => {
  const prompt = extractPromptFromPage1(extracted.pages[0]?.lines ?? []);

  if (extracted.pages.length < 2) {
    return prompt ? { prompt, answers: [] } : null;
  }

  const page2Items = extracted.pages[1]?.items ?? [];
  const solIdx = page2Items.findIndex((it) => it.str.toLowerCase() === "solution");
  if (solIdx < 0) {
    return prompt ? { prompt, answers: [] } : null;
  }

  const solY = page2Items[solIdx]!.y;
  const rawAnswers = extractAnswersFromItems(page2Items, solY);

  if (rawAnswers.length === 0) {
    return null;
  }

  const answerSlots: ProblemAnswerSlot[] = rawAnswers.map((answer) => ({
    id: answer.id,
    label: answer.id,
    placeholder: unitHintFromExpected(answer.expected),
    keyboardType: "default",
    grading: {
      type: "numeric-unit",
      expected: answer.expected,
      allowMissingUnit: true,
    },
  }));

  return { prompt, answers: answerSlots };
};

export interface ParsedAutoCircuitsAnswer {
  id: string;
  expected: string;
}

export { type ParsedAnswer };

// ---- Legacy helpers for fixtures ----

export const parseAutoCircuitsPdfText = (text: string): { prompt: string; answers: ParsedAutoCircuitsAnswer[] } | null => {
  const normalized = normalizeText(text);
  const problemMatch = normalized.match(/Problem:\s*(.+?)(?:\n|$)/i);
  const solutionMatch = normalized.match(/Solution\s+([\s\S]+)/i);
  if (!problemMatch || !solutionMatch) {
    return null;
  }

  const prompt = problemMatch[1]?.trim();
  const solutionText = solutionMatch[1] ?? "";
  if (!prompt) {
    return null;
  }

  const answers: ParsedAutoCircuitsAnswer[] = [];
  const answerPattern =
    /([a-zA-Z][a-zA-Z0-9_]*)\s*=\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\s*([a-zA-ZµμΩ°%/]+)?/gi;

  for (const match of solutionText.matchAll(answerPattern)) {
    const id = match[1];
    const magnitude = match[2];
    if (!id || !magnitude) {
      continue;
    }

    const unit = match[3] ? ` ${match[3]}` : "";
    answers.push({
      id,
      expected: `${magnitude}${unit}`,
    });
  }

  if (answers.length === 0) {
    return null;
  }

  return { prompt, answers };
};

export const createAutoCircuitsAnswerSlots = (answers: ParsedAutoCircuitsAnswer[]): ProblemAnswerSlot[] =>
  answers.map((answer) => ({
    id: answer.id,
    label: answer.id,
    placeholder: unitHintFromExpected(answer.expected),
    keyboardType: "default",
    grading: {
      type: "numeric-unit",
      expected: answer.expected,
      allowMissingUnit: true,
    },
  }));
