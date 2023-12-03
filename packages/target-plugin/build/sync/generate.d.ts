import { PBXAggregateTarget, PBXLegacyTarget, PBXNativeTarget, XcodeProject } from "@bacons/xcode";
export declare function printPlistsAsJson(): void;
export declare function getPossibleExtensionIds(project: XcodeProject): (string | null)[];
export declare function getFrameworksForTargets(project: XcodeProject): string;
export declare function getNativeTargetId(target: PBXNativeTarget | PBXAggregateTarget | PBXLegacyTarget): string | null;
