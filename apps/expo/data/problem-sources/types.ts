import type { ImageSourcePropType, KeyboardTypeOptions } from "react-native";

export type ProblemSourceId = "autocircuits" | "autocircuits-offline" | "generic-textbook";

export type SourcePrefValue = string | number | boolean;

export type SourcePrefs = Record<string, SourcePrefValue | undefined>;

export interface SourcePrefOption {
  label: string;
  value: string;
}

export interface SourcePrefVisibility {
  key: string;
  equals: SourcePrefValue | SourcePrefValue[];
}

interface SourcePrefBase {
  key: string;
  label: string;
  description?: string;
  visibleWhen?: SourcePrefVisibility;
}

export interface SelectSourcePrefSpec extends SourcePrefBase {
  type: "select";
  defaultValue: string;
  options: SourcePrefOption[];
}

export interface BooleanSourcePrefSpec extends SourcePrefBase {
  type: "boolean";
  defaultValue: boolean;
}

export interface NumberSourcePrefSpec extends SourcePrefBase {
  type: "number";
  defaultValue: number;
  min?: number;
  max?: number;
}

export interface TextSourcePrefSpec extends SourcePrefBase {
  type: "text";
  defaultValue: string;
  placeholder?: string;
}

export type SourcePrefSpec =
  | SelectSourcePrefSpec
  | BooleanSourcePrefSpec
  | NumberSourcePrefSpec
  | TextSourcePrefSpec;

export interface ProblemAsset {
  id: string;
  title?: string;
  caption?: string;
  image?: ImageSourcePropType;
  webUrl?: string;
  sourceUrl?: string;
  sourceUrlLabel?: string;
  placeholder?: string;
}

export type ProblemAnswerGrading =
  | {
      type: "exact";
      expected: string;
      caseSensitive?: boolean;
    }
  | {
      type: "numeric";
      expected: number;
      tolerance?: number;
    }
  | {
      type: "numeric-unit";
      expected: string;
      tolerance?: number;
      allowMissingUnit?: boolean;
    };

export interface ProblemAnswerSlot {
  id: string;
  label: string;
  caption?: string;
  placeholder?: string;
  required?: boolean;
  keyboardType?: KeyboardTypeOptions;
  grading: ProblemAnswerGrading;
}

export interface ProblemDocument {
  id: string;
  title: string;
  description: string;
  prompt: string;
  assets: ProblemAsset[];
  answerSlots: ProblemAnswerSlot[];
  footer?: string;
  source: {
    id: ProblemSourceId;
    label: string;
    generatedAt?: string;
    remoteUrl?: string;
    metadata?: Record<string, SourcePrefValue | string[] | undefined>;
  };
}

export interface ProblemSource {
  id: ProblemSourceId;
  label: string;
  description: string;
  defaultPrefs: SourcePrefs;
  getPrefSpecs: (prefs?: SourcePrefs) => SourcePrefSpec[];
  getProblemDocument: (prefs: SourcePrefs) => Promise<ProblemDocument>;
}
