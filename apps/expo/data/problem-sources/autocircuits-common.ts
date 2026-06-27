import {
  autoCircuitsChapterOptions,
  autoCircuitsDifficultyOptions,
  autoCircuitsModeOptions,
  autoCircuitsNumberTypeOptions,
  autoCircuitsPartOptions,
} from "./autocircuits.fixtures";
import type { SourcePrefSpec, SourcePrefs } from "./types";

export type AutoCircuitsMode = "parts" | "chapters" | "shuffle";

export const autoCircuitsDefaultPrefs: SourcePrefs = {
  mode: "chapters",
  part: "DC_Random",
  chapter: "Kirchhoff_Laws",
  difficulty: "eeasy",
  numberType: "integer",
  allowControlledSources: false,
  allowOpAmps: false,
  allowCouplings: false,
};

export const prefString = (prefs: SourcePrefs, key: string, fallback: string): string =>
  typeof prefs[key] === "string" ? String(prefs[key]) : fallback;

export const prefBool = (prefs: SourcePrefs, key: string, fallback: boolean): boolean =>
  typeof prefs[key] === "boolean" ? Boolean(prefs[key]) : fallback;

export const getAutoCircuitsPrefSpecs = (extraSpecs: SourcePrefSpec[] = []): SourcePrefSpec[] => [
  ...extraSpecs,
  {
    key: "mode",
    label: "Mode",
    description: "Choose whether the circuit topic is selected by part, chapter, or shuffle.",
    type: "select",
    defaultValue: "chapters",
    options: autoCircuitsModeOptions,
  },
  {
    key: "part",
    label: "Part",
    type: "select",
    defaultValue: "DC_Random",
    options: autoCircuitsPartOptions,
    visibleWhen: { key: "mode", equals: "parts" },
  },
  {
    key: "chapter",
    label: "Chapter",
    type: "select",
    defaultValue: "Kirchhoff_Laws",
    options: autoCircuitsChapterOptions,
    visibleWhen: { key: "mode", equals: "chapters" },
  },
  {
    key: "difficulty",
    label: "Difficulty",
    type: "select",
    defaultValue: "eeasy",
    options: autoCircuitsDifficultyOptions,
  },
  {
    key: "numberType",
    label: "Number Type",
    type: "select",
    defaultValue: "integer",
    options: autoCircuitsNumberTypeOptions,
  },
  {
    key: "allowControlledSources",
    label: "Controlled Sources",
    type: "boolean",
    defaultValue: false,
  },
  {
    key: "allowOpAmps",
    label: "Operational Amplifiers",
    type: "boolean",
    defaultValue: false,
  },
  {
    key: "allowCouplings",
    label: "Transformers/Couplings",
    type: "boolean",
    defaultValue: false,
  },
];
