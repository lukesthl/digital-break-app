import { generatedAt, entries } from "../../assets/problem-sources/autocircuits-bank/manifest";
import { autoCircuitsDefaultPrefs, getAutoCircuitsPrefSpecs, prefBool, prefString } from "./autocircuits-common";
import { createAutoCircuitsAnswerSlots } from "./autocircuits-pdf";
import type { ProblemDocument, ProblemSource, SourcePrefs } from "./types";

const hashString = (input: string): number => {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const pickEntry = (prefs: SourcePrefs, requestNonce = 0) => {
  const merged = { ...autoCircuitsDefaultPrefs, ...prefs };
  const mode = prefString(merged, "mode", "parts");
  const difficulty = prefString(merged, "difficulty", "medium");
  const numberType = prefString(merged, "numberType", "integer");
  const allowControlledSources = prefBool(merged, "allowControlledSources", false);
  const allowOpAmps = prefBool(merged, "allowOpAmps", false);
  const allowCouplings = prefBool(merged, "allowCouplings", false);

  const filtered = entries.filter((entry) => {
    if (mode === "chapters" && entry.chapter !== prefString(merged, "chapter", "DC_Analysis")) return false;
    if (mode === "parts" && entry.part !== prefString(merged, "part", "DC_Random")) return false;
    return (
      entry.difficulty === difficulty &&
      entry.numberType === numberType &&
      entry.allowControlledSources === allowControlledSources &&
      entry.allowOpAmps === allowOpAmps &&
      entry.allowCouplings === allowCouplings
    );
  });

  const hasRequestedCategory = entries.some((entry) => {
    if (mode === "chapters" && entry.chapter !== prefString(merged, "chapter", "DC_Analysis")) return false;
    if (mode === "parts" && entry.part !== prefString(merged, "part", "DC_Random")) return false;
    return true;
  });
  const categoryEntries = hasRequestedCategory ? entries : entries.filter((entry) => entry.chapter === "Kirchhoff_Laws");

  const relaxed = categoryEntries.filter((entry) => {
    if (hasRequestedCategory && mode === "chapters" && entry.chapter !== prefString(merged, "chapter", "DC_Analysis")) return false;
    if (hasRequestedCategory && mode === "parts" && entry.part !== prefString(merged, "part", "DC_Random")) return false;
    return (
      entry.allowControlledSources === allowControlledSources &&
      entry.allowOpAmps === allowOpAmps &&
      entry.allowCouplings === allowCouplings
    );
  });

  const pool = filtered.length > 0 ? filtered : relaxed;

  if (pool.length === 0) {
    throw new Error(`No offline AutoCircuits problem matches these settings: ${JSON.stringify(merged)}`);
  }

  const baseIndex = hashString(JSON.stringify(merged)) % pool.length;
  return pool[(baseIndex + requestNonce) % pool.length]!;
};

const entryToDocument = (entry: (typeof entries)[number], prefs: SourcePrefs, requestNonce = 0): ProblemDocument => ({
  id: `${entry.id}-${requestNonce}`,
  title: "Solve the circuit",
  description: "Answer correctly to continue.",
  prompt: entry.prompt,
  assets: [
    {
      id: "circuit-page",
      title: "Circuit diagram",
      caption: "Rendered from a generated AutoCircuits PDF.",
      image: entry.image,
      sourceUrl: entry.pdf,
      sourceUrlLabel: "Open PDF",
    },
  ],
  answerSlots: createAutoCircuitsAnswerSlots(entry.answers),
  footer: "Generated from a local offline AutoCircuits bank.",
  source: {
    id: "autocircuits-offline",
    label: "AutoCircuits Offline",
    generatedAt,
    remoteUrl: entry.remotePdf || entry.pdf,
    metadata: {
      mode: prefString(prefs, "mode", "parts"),
      part: prefString(prefs, "part", "DC_Random"),
      chapter: prefString(prefs, "chapter", "DC_Analysis"),
      difficulty: prefString(prefs, "difficulty", "medium"),
      numberType: prefString(prefs, "numberType", "integer"),
      allowControlledSources: prefBool(prefs, "allowControlledSources", false),
      allowOpAmps: prefBool(prefs, "allowOpAmps", false),
      allowCouplings: prefBool(prefs, "allowCouplings", false),
    },
  },
});

export const autoCircuitsOfflineSource: ProblemSource = {
  id: "autocircuits-offline",
  label: "AutoCircuits Offline",
  description: "Electrical circuit problems selected from a local pregenerated bank.",
  defaultPrefs: autoCircuitsDefaultPrefs,
  getPrefSpecs: () => getAutoCircuitsPrefSpecs(),
  getProblemDocument: async (prefs): Promise<ProblemDocument> => {
    const requestNonce = typeof prefs._requestNonce === "number" ? prefs._requestNonce : 0;
    const mergedPrefs = { ...autoCircuitsDefaultPrefs, ...prefs };
    return entryToDocument(pickEntry(mergedPrefs, requestNonce), mergedPrefs, requestNonce);
  },
};
