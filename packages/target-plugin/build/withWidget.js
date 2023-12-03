"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const withAccentColor_1 = require("./accentColor/withAccentColor");
const withIosIcon_1 = require("./icon/withIosIcon");
const target_1 = require("./target");
const withEasCredentials_1 = require("./withEasCredentials");
const withXcodeChanges_1 = require("./withXcodeChanges");
function kebabToCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
const withWidget = (config, props) => {
    // TODO: Magically based on the top-level folders in the `ios-widgets/` folder
    if (props.icon && !/https?:\/\//.test(props.icon)) {
        props.icon = path_1.default.join(props.directory, props.icon);
    }
    const widgetDir = (props.name ?? path_1.default.basename(props.directory))
        .replace(/\/+$/, "")
        .replace(/^\/+/, "");
    const widget = kebabToCamelCase(widgetDir);
    const widgetFolderAbsolutePath = path_1.default.join(config._internal.projectRoot, props.directory);
    // Ensure the entry file exists
    (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        async (config) => {
            fs_1.default.mkdirSync(widgetFolderAbsolutePath, { recursive: true });
            const files = [
                ["Info.plist", (0, target_1.getTargetInfoPlistForType)(props.type)],
            ];
            // if (props.type === "widget") {
            //   files.push(
            //     [
            //       "index.swift",
            //       ENTRY_FILE.replace(
            //         "// Export widgets here",
            //         "// Export widgets here\n" + `        ${widget}()`
            //       ),
            //     ],
            //     [widget + ".swift", WIDGET.replace(/alpha/g, widget)],
            //     [widget + ".intentdefinition", INTENT_DEFINITION]
            //   );
            // }
            files.forEach(([filename, content]) => {
                const filePath = path_1.default.join(widgetFolderAbsolutePath, filename);
                if (!fs_1.default.existsSync(filePath)) {
                    fs_1.default.writeFileSync(filePath, content);
                }
            });
            return config;
        },
    ]);
    const targetName = widget;
    const bundleId = config.ios.bundleIdentifier + "." + widget;
    (0, withXcodeChanges_1.withXcodeChanges)(config, {
        name: targetName,
        cwd: "../" +
            path_1.default.relative(config._internal.projectRoot, path_1.default.resolve(props.directory)),
        deploymentTarget: props.deploymentTarget ?? "16.4",
        bundleId,
        hasAccentColor: !!props.accentColor,
        // @ts-expect-error: who cares
        currentProjectVersion: config.ios?.buildNumber || 1,
        frameworks: (0, target_1.getFrameworksForType)(props.type).concat(props.frameworks || []),
        type: props.type,
        teamId: props.appleTeamId,
    });
    config = (0, withEasCredentials_1.withEASTargets)(config, { targetName, bundleIdentifier: bundleId });
    if (props.accentColor) {
        const lightColor = typeof props.accentColor === "string"
            ? props.accentColor
            : props.accentColor.color;
        const darkColor = typeof props.accentColor === "string"
            ? undefined
            : props.accentColor.darkColor;
        // You use the WidgetBackground and AccentColor to style the widget configuration interface of a configurable widget. Apple could have chosen names to make that more obvious.
        // https://useyourloaf.com/blog/widget-background-and-accent-color/
        // i.e. when you press and hold on a widget to configure it, the background color of the widget configuration interface changes to the background color we set here.
        (0, withAccentColor_1.withIosAccentColor)(config, {
            cwd: props.directory,
            color: lightColor,
            darkColor: darkColor,
        });
    }
    if (props.widgetBackgroundColor) {
        const lightColor = typeof props.widgetBackgroundColor === "string"
            ? props.widgetBackgroundColor
            : props.widgetBackgroundColor.color;
        const darkColor = typeof props.widgetBackgroundColor === "string"
            ? undefined
            : props.widgetBackgroundColor.darkColor;
        (0, withAccentColor_1.withIosWidgetBackgroundColor)(config, {
            cwd: props.directory,
            color: lightColor,
            darkColor: darkColor,
        });
    }
    if (props.icon) {
        (0, withIosIcon_1.withIosIcon)(config, {
            type: props.type,
            cwd: props.directory,
            // TODO: read from the top-level icon.png file in the folder -- ERR this doesn't allow for URLs
            iconFilePath: props.icon,
        });
    }
    return config;
};
exports.default = withWidget;
