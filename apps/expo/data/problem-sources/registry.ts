import { autoCircuitsSource } from "./autocircuits";
import { autoCircuitsOfflineSource } from "./autocircuits-offline";
import { genericTextbookSource } from "./generic-textbook";
import type { ProblemSource, ProblemSourceId, SourcePrefSpec, SourcePrefs } from "./types";

export const defaultProblemSourceId: ProblemSourceId = "autocircuits";

export const problemSources: ProblemSource[] = [autoCircuitsSource, autoCircuitsOfflineSource, genericTextbookSource];

export const getProblemSource = (sourceId?: string): ProblemSource =>
  problemSources.find((source) => source.id === sourceId) ?? autoCircuitsSource;

export const getDefaultSourcePrefs = (sourceId?: string): SourcePrefs => {
  const source = getProblemSource(sourceId);
  return { ...source.defaultPrefs };
};

export const normalizeSourcePrefs = (sourceId: string | undefined, prefs: SourcePrefs | undefined): SourcePrefs => {
  const source = getProblemSource(sourceId);
  return {
    ...source.defaultPrefs,
    ...(prefs ?? {}),
  };
};

export const isSourcePrefVisible = (spec: SourcePrefSpec, prefs: SourcePrefs): boolean => {
  if (!spec.visibleWhen) {
    return true;
  }

  const expectedValues = Array.isArray(spec.visibleWhen.equals) ? spec.visibleWhen.equals : [spec.visibleWhen.equals];
  return expectedValues.includes(prefs[spec.visibleWhen.key]!);
};

export const getVisibleSourcePrefSpecs = (sourceId: string | undefined, prefs: SourcePrefs): SourcePrefSpec[] => {
  const source = getProblemSource(sourceId);
  const mergedPrefs = normalizeSourcePrefs(source.id, prefs);
  return source.getPrefSpecs(mergedPrefs).filter((spec) => isSourcePrefVisible(spec, mergedPrefs));
};
