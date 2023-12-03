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
exports.generateWatchIconsInternalAsync = exports.generateIconsInternalAsync = exports.setIconsAsync = exports.ICON_CONTENTS = exports.withIosIcon = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const image_utils_1 = require("@expo/image-utils");
const AssetContents_1 = require("@expo/prebuild-config/build/plugins/icons/AssetContents");
const fs = __importStar(require("fs-extra"));
const path_1 = require("path");
const withIosIcon = (config, { cwd, type, iconFilePath }) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        async (config) => {
            const projectRoot = config.modRequest.projectRoot;
            const namedProjectRoot = (0, path_1.join)(projectRoot, cwd);
            if (type === "watch") {
                // Ensure the Images.xcassets/AppIcon.appiconset path exists
                await fs.ensureDir((0, path_1.join)(namedProjectRoot, IMAGESET_PATH));
                // Finally, write the Config.json
                await (0, AssetContents_1.writeContentsJsonAsync)((0, path_1.join)(namedProjectRoot, IMAGESET_PATH), {
                    images: await generateWatchIconsInternalAsync(iconFilePath, projectRoot, namedProjectRoot, cwd),
                });
            }
            else {
                await setIconsAsync(iconFilePath, projectRoot, (0, path_1.join)(projectRoot, cwd), cwd);
            }
            return config;
        },
    ]);
};
exports.withIosIcon = withIosIcon;
const IMAGE_CACHE_NAME = "widget-icons-";
const IMAGESET_PATH = "Assets.xcassets/AppIcon.appiconset";
// Hard-coding seemed like the clearest and safest way to implement the sizes.
exports.ICON_CONTENTS = [
    {
        idiom: "iphone",
        sizes: [
            {
                size: 20,
                scales: [2, 3],
            },
            {
                size: 29,
                scales: [1, 2, 3],
            },
            {
                size: 40,
                scales: [2, 3],
            },
            {
                size: 60,
                scales: [2, 3],
            },
            // TODO: 76x76@2x seems unused now
            // {
            //   size: 76,
            //   scales: [2],
            // },
        ],
    },
    {
        idiom: "ipad",
        sizes: [
            {
                size: 20,
                scales: [1, 2],
            },
            {
                size: 29,
                scales: [1, 2],
            },
            {
                size: 40,
                scales: [1, 2],
            },
            {
                size: 76,
                scales: [1, 2],
            },
            {
                size: 83.5,
                scales: [2],
            },
        ],
    },
    {
        idiom: "ios-marketing",
        sizes: [
            {
                size: 1024,
                scales: [1],
            },
        ],
    },
];
async function setIconsAsync(icon, projectRoot, iosNamedProjectRoot, cacheComponent) {
    // Ensure the Images.xcassets/AppIcon.appiconset path exists
    await fs.ensureDir((0, path_1.join)(iosNamedProjectRoot, IMAGESET_PATH));
    // Finally, write the Config.json
    await (0, AssetContents_1.writeContentsJsonAsync)((0, path_1.join)(iosNamedProjectRoot, IMAGESET_PATH), {
        images: await generateIconsInternalAsync(icon, projectRoot, iosNamedProjectRoot, cacheComponent),
    });
}
exports.setIconsAsync = setIconsAsync;
async function generateIconsInternalAsync(icon, projectRoot, iosNamedProjectRoot, cacheComponent) {
    // Store the image JSON data for assigning via the Contents.json
    const imagesJson = [];
    // keep track of icons that have been generated so we can reuse them in the Contents.json
    const generatedIcons = {};
    for (const platform of exports.ICON_CONTENTS) {
        const isMarketing = platform.idiom === "ios-marketing";
        for (const { size, scales } of platform.sizes) {
            for (const scale of scales) {
                // The marketing icon is special because it makes no sense.
                const filename = isMarketing
                    ? "ItunesArtwork@2x.png"
                    : getAppleIconName(size, scale);
                // Only create an image that hasn't already been generated.
                if (!(filename in generatedIcons)) {
                    const iconSizePx = size * scale;
                    // Using this method will cache the images in `.expo` based on the properties used to generate them.
                    // this method also supports remote URLs and using the global sharp instance.
                    const { source } = await (0, image_utils_1.generateImageAsync)({ projectRoot, cacheType: IMAGE_CACHE_NAME + cacheComponent }, {
                        src: icon,
                        name: filename,
                        width: iconSizePx,
                        height: iconSizePx,
                        removeTransparency: true,
                        // The icon should be square, but if it's not then it will be cropped.
                        resizeMode: "cover",
                        // Force the background color to solid white to prevent any transparency.
                        // TODO: Maybe use a more adaptive option based on the icon color?
                        backgroundColor: "#ffffff",
                    });
                    // Write image buffer to the file system.
                    const assetPath = (0, path_1.join)(iosNamedProjectRoot, IMAGESET_PATH, filename);
                    await fs.writeFile(assetPath, source);
                    // Save a reference to the generated image so we don't create a duplicate.
                    generatedIcons[filename] = true;
                }
                imagesJson.push({
                    idiom: platform.idiom,
                    size: `${size}x${size}`,
                    // @ts-ignore: template types not supported in TS yet
                    scale: `${scale}x`,
                    filename,
                });
            }
        }
    }
    return imagesJson;
}
exports.generateIconsInternalAsync = generateIconsInternalAsync;
async function generateWatchIconsInternalAsync(icon, projectRoot, iosNamedProjectRoot, cacheComponent) {
    // Store the image JSON data for assigning via the Contents.json
    const imagesJson = [];
    const size = 1024;
    const filename = getAppleIconName(size, 1);
    // Using this method will cache the images in `.expo` based on the properties used to generate them.
    // this method also supports remote URLs and using the global sharp instance.
    const { source } = await (0, image_utils_1.generateImageAsync)({ projectRoot, cacheType: IMAGE_CACHE_NAME + cacheComponent }, {
        src: icon,
        name: filename,
        width: size,
        height: size,
        removeTransparency: true,
        // The icon should be square, but if it's not then it will be cropped.
        resizeMode: "cover",
        // Force the background color to solid white to prevent any transparency.
        // TODO: Maybe use a more adaptive option based on the icon color?
        backgroundColor: "#ffffff",
    });
    // Write image buffer to the file system.
    const assetPath = (0, path_1.join)(iosNamedProjectRoot, IMAGESET_PATH, filename);
    await fs.writeFile(assetPath, source);
    imagesJson.push({
        filename: getAppleIconName(size, 1),
        idiom: "universal",
        platform: "watchos",
        size: `${size}x${size}`,
    });
    return imagesJson;
}
exports.generateWatchIconsInternalAsync = generateWatchIconsInternalAsync;
function getAppleIconName(size, scale) {
    return `App-Icon-${size}x${size}@${scale}x.png`;
}
