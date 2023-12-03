"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customColorFromCSS = void 0;
const normalize_color_1 = __importDefault(require("@react-native/normalize-color"));
function customColorFromCSS(color) {
    let colorInt = (0, normalize_color_1.default)(color);
    colorInt = ((colorInt << 24) | (colorInt >>> 8)) >>> 0;
    const red = ((colorInt >> 16) & 255) / 255;
    const green = ((colorInt >> 8) & 255) / 255;
    const blue = (colorInt & 255) / 255;
    const alpha = ((colorInt >> 24) & 255) / 255;
    return {
        red,
        green,
        blue,
        alpha,
    };
}
exports.customColorFromCSS = customColorFromCSS;
