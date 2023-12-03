"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withXcodeProjectBetaBaseMod = exports.withXcodeProjectBeta = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const fs = __importStar(require("fs"));
const xcodeParse = __importStar(require("@bacons/xcode/json"));
const xcode_1 = require("@bacons/xcode");
const customModName = "xcodeProjectBeta";
const withXcodeProjectBeta = (config, action) => {
    return (0, config_plugins_1.withMod)(config, {
        platform: "ios",
        mod: customModName,
        action,
    });
};
exports.withXcodeProjectBeta = withXcodeProjectBeta;
const withXcodeProjectBetaBaseModInternal = (config) => {
    return config_plugins_1.BaseMods.withGeneratedBaseMods(config, {
        platform: "ios",
        saveToInternal: true,
        skipEmptyMod: false,
        providers: {
            // Append a custom rule to supply AppDelegate header data to mods on `mods.ios.AppClipInfoPlist`
            [customModName]: config_plugins_1.BaseMods.provider({
                isIntrospective: false,
                // isIntrospective: true,
                async getFilePath({ modRequest, _internal }) {
                    // console.log("_internal", _internal.projectRoot);
                    // HACK: To keep soft-clean working, we need to read from the the project and not the template.
                    return config_plugins_1.IOSConfig.Paths.getPBXProjectPath(_internal.projectRoot);
                    // return IOSConfig.Paths.getPBXProjectPath(modRequest.projectRoot);
                },
                async read(filePath) {
                    try {
                        return xcode_1.XcodeProject.open(filePath);
                    }
                    catch (error) {
                        throw new Error(`Failed to parse the Xcode project: "${filePath}". ${error.message}}`);
                    }
                },
                async write(filePath, { modResults, modRequest: { introspect } }) {
                    if (introspect) {
                        return;
                    }
                    const contents = xcodeParse.build(modResults.toJSON());
                    if (contents.trim().length) {
                        await fs.promises.writeFile(filePath, contents);
                    }
                },
            }),
        },
    });
};
exports.withXcodeProjectBetaBaseMod = (0, config_plugins_1.createRunOncePlugin)(withXcodeProjectBetaBaseModInternal, "withXcodeProjectBetaBaseMod");
