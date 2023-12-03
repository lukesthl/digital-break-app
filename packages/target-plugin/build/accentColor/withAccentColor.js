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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setColorAsync = exports.withIosWidgetBackgroundColor = exports.withIosAccentColor = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importStar(require("path"));
const customColorFromCSS_1 = require("./customColorFromCSS");
const withIosAccentColor = (config, { cwd, color, darkColor }) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        async (config) => {
            await setColorAsync({ color, darkColor }, (0, path_1.join)(config.modRequest.projectRoot, cwd, "Assets.xcassets/AccentColor.colorset"));
            return config;
        },
    ]);
};
exports.withIosAccentColor = withIosAccentColor;
const withIosWidgetBackgroundColor = (config, { cwd, color, darkColor }) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        async (config) => {
            await setColorAsync({ color, darkColor }, (0, path_1.join)(config.modRequest.projectRoot, cwd, "Assets.xcassets/WidgetBackground.colorset"));
            return config;
        },
    ]);
};
exports.withIosWidgetBackgroundColor = withIosWidgetBackgroundColor;
const DARK_APPEARANCE = {
    appearance: "luminosity",
    value: "dark",
};
function createColor(color) {
    return {
        "color-space": "srgb",
        components: (0, customColorFromCSS_1.customColorFromCSS)(color),
    };
}
async function setColorAsync({ color, darkColor }, colorsetFilePath) {
    // Ensure the Images.xcassets/AppIcon.appiconset path exists
    await fs_1.default.promises.mkdir(colorsetFilePath, { recursive: true });
    // Store the image JSON data for assigning via the Contents.json
    const colorsJson = [];
    if (color) {
        colorsJson.push({
            color: createColor(color),
            idiom: "universal",
        });
    }
    if (darkColor) {
        colorsJson.push({
            appearances: [DARK_APPEARANCE],
            color: createColor(darkColor),
            idiom: "universal",
        });
    }
    // Finally, write the Config.json
    await writeContentsJsonAsync(colorsetFilePath, {
        colors: colorsJson,
    });
}
exports.setColorAsync = setColorAsync;
async function writeContentsJsonAsync(directory, { colors }) {
    await fs_1.default.promises.mkdir(directory, { recursive: true });
    await fs_1.default.promises.writeFile(path_1.default.join(directory, "Contents.json"), JSON.stringify({
        colors,
        info: {
            version: 1,
            // common practice is for the tool that generated the icons to be the "author"
            author: "expo",
        },
    }, null, 2));
}
