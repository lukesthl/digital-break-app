"use strict";
// Generate aspects of the plugin from an Xcode project.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNativeTargetId = exports.getFrameworksForTargets = exports.getPossibleExtensionIds = exports.printPlistsAsJson = void 0;
const plist_1 = __importDefault(require("@expo/plist"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const xcode_1 = require("@bacons/xcode");
const glob_1 = require("glob");
function printPlistsAsJson() {
    const cwd = process.cwd();
    const files = (0, glob_1.sync)("targets/*/Info.plist", { cwd });
    const json = files.map((file) => {
        const content = fs_extra_1.default.readFileSync(path_1.default.join(cwd, file), "utf8");
        return [file, plist_1.default.parse(content)];
    });
    console.log(JSON.stringify(json, null, 2));
}
exports.printPlistsAsJson = printPlistsAsJson;
function getPossibleExtensionIds(project) {
    return project.rootObject.props.targets
        .map((target) => {
        return getNativeTargetId(target);
    })
        .filter(Boolean);
}
exports.getPossibleExtensionIds = getPossibleExtensionIds;
function getFrameworksForTargets(project) {
    const items = [];
    project.rootObject.props.targets.forEach((target) => {
        // Print frameworks for each target
        // console.log(target.props.name);
        const frameworks = target.props.buildPhases.find((phase) => phase.isa === "PBXFrameworksBuildPhase");
        const frameworkNames = frameworks.props.files
            .map((file) => `"${file.props.fileRef.props.name.replace(".framework", "")}"`)
            .join(", ");
        if (frameworkNames.length === 0) {
            return;
        }
        const targetId = getNativeTargetId(target);
        if (targetId) {
            items.push([targetId, frameworkNames]);
        }
    });
    // Remove duplicates
    const uniqueItems = items
        .filter((item, index, self) => index === self.findIndex((t) => t[0] === item[0]))
        .sort((a, b) => a[0].localeCompare(b[0]));
    return uniqueItems
        .map(([target, frameworkNames], index) => {
        return `${index === 0 ? "" : "else "}if (type === "${target}") {
            return [${frameworkNames}];
            }`;
    })
        .join("\n");
}
exports.getFrameworksForTargets = getFrameworksForTargets;
// printPlistsAsJson();
function getNativeTargetId(target) {
    if (xcode_1.PBXNativeTarget.is(target) &&
        target.props.productType !== "com.apple.product-type.app-extension") {
        return null;
    }
    // Could be a Today Extension, Share Extension, etc.
    const defConfig = target.props.buildConfigurationList.props.buildConfigurations.find((config) => config.props.name ===
        target.props.buildConfigurationList.props.defaultConfigurationName);
    const infoPlistPath = path_1.default.join(
    // TODO: Resolve root better
    path_1.default.dirname(path_1.default.dirname(target.project.getXcodeProject().filePath)), defConfig.props.buildSettings.INFOPLIST_FILE);
    const infoPlist = plist_1.default.parse(fs_extra_1.default.readFileSync(infoPlistPath, "utf8"));
    if (!infoPlist.NSExtension?.NSExtensionPointIdentifier) {
        console.error("No NSExtensionPointIdentifier found in extension Info.plist for target: " +
            target.getDisplayName());
        return null;
    }
    return infoPlist.NSExtension?.NSExtensionPointIdentifier;
}
exports.getNativeTargetId = getNativeTargetId;
(async () => {
    const projPath = (0, glob_1.sync)("ios/*/project.pbxproj", {
        cwd: process.cwd(),
        absolute: true,
    })[0];
    const project = xcode_1.XcodeProject.open(projPath);
    console.log(getFrameworksForTargets(project));
    console.log("--- NSExtensionPointIdentifier ---");
    console.log(getPossibleExtensionIds(project));
    process.exit(0);
})();
