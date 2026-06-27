import type { ProblemAnswerSlot, ProblemDocument } from "./types";

export type AnswerStatus = "correct" | "incorrect" | "missing";

export interface GradedAnswer {
  slotId: string;
  status: AnswerStatus;
}

const normalizeText = (value: string): string =>
  value
    .normalize("NFKC")
    .replace(/[−–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

const normalizeUnit = (value: string): string =>
  normalizeText(value)
    .replace(/[µμ]/g, "u")
    .replace(/Ω/g, "ohm")
    .toLowerCase();

const parseNumericAnswer = (value: string): { magnitude: number; unit: string } | null => {
  const normalized = normalizeText(value);
  const answerOnly = normalized.includes("=") ? normalized.split("=").at(-1)?.trim() ?? "" : normalized;
  const match = answerOnly.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\s*([a-zA-ZµμΩ°%/]+)?$/i);
  if (!match) {
    return null;
  }

  const magnitude = Number(match[1]);
  if (!Number.isFinite(magnitude)) {
    return null;
  }

  return {
    magnitude,
    unit: normalizeUnit(match[2] ?? ""),
  };
};

export const gradeAnswerSlot = (slot: ProblemAnswerSlot, value: string): AnswerStatus => {
  const normalizedValue = normalizeText(value);
  if ((slot.required ?? true) && normalizedValue.length === 0) {
    return "missing";
  }

  if (slot.grading.type === "exact") {
    const expected = normalizeText(slot.grading.expected);
    const actual = normalizedValue;
    const isCorrect = slot.grading.caseSensitive
      ? actual === expected
      : actual.toLowerCase() === expected.toLowerCase();
    return isCorrect ? "correct" : "incorrect";
  }

  if (slot.grading.type === "numeric") {
    const actual = parseNumericAnswer(normalizedValue);
    if (!actual) {
      return "incorrect";
    }
    const tolerance = slot.grading.tolerance ?? 0.01;
    return Math.abs(actual.magnitude - slot.grading.expected) <= tolerance ? "correct" : "incorrect";
  }

  const expected = parseNumericAnswer(slot.grading.expected);
  const actual = parseNumericAnswer(normalizedValue);
  if (!expected || !actual) {
    return normalizeText(slot.grading.expected).toLowerCase() === normalizedValue.toLowerCase()
      ? "correct"
      : "incorrect";
  }

  const tolerance = slot.grading.tolerance ?? 0.01;
  const magnitudeMatches = Math.abs(actual.magnitude - expected.magnitude) <= tolerance;
  const unitMatches =
    actual.unit === expected.unit || (slot.grading.allowMissingUnit === true && actual.unit.length === 0);

  return magnitudeMatches && unitMatches ? "correct" : "incorrect";
};

export const gradeProblemAnswers = (
  document: ProblemDocument,
  answersBySlotId: Record<string, string>
): GradedAnswer[] =>
  document.answerSlots.map((slot) => ({
    slotId: slot.id,
    status: gradeAnswerSlot(slot, answersBySlotId[slot.id] ?? ""),
  }));

export const getAnswerErrorMessage = (status: AnswerStatus): string | null => {
  if (status === "missing") {
    return "This answer is required.";
  }
  if (status === "incorrect") {
    return "That answer is not correct yet.";
  }
  return null;
};
