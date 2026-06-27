/* eslint-disable */
import type { ImageSourcePropType } from "react-native";

export type AutoCircuitsBankEntry = {
  id: string;
  part: string;
  chapter: string;
  mode: string;
  difficulty: string;
  numberType: string;
  allowControlledSources: boolean;
  allowOpAmps: boolean;
  allowCouplings: boolean;
  prompt: string;
  answers: { id: string; expected: string }[];
  pdf: string;
  remotePdf: string;
  image: ImageSourcePropType;
};

export const generatedAt = "2026-06-27";
export const entries: AutoCircuitsBankEntry[] = [
];
