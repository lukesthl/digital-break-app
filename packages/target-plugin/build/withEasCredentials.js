"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEASTargets = exports.withDefaultAppGroup = void 0;
const config_plugins_1 = require("expo/config-plugins");
function safeSet(obj, key, value) {
    const segments = key.split(".");
    const last = segments.pop();
    segments.forEach((segment) => {
        if (!obj[segment]) {
            obj[segment] = {};
        }
        obj = obj[segment];
    });
    obj[last] = value;
    return obj;
}
function unique(arr) {
    return [...new Set(arr)];
}
const withDefaultAppGroup = (config) => {
    (0, config_plugins_1.withEntitlementsPlist)(config, (config) => {
        // Inject an App Group
        config.modResults["com.apple.security.application-groups"] = unique([
            ...config.modResults["com.apple.security.application-groups"],
            "group." + config.ios.bundleIdentifier,
        ]);
        return config;
    });
    return config;
};
exports.withDefaultAppGroup = withDefaultAppGroup;
const withEASTargets = (config, { bundleIdentifier, targetName }) => {
    // Extra EAS targets
    safeSet(config, "extra.eas.build.experimental.ios.appExtensions", []);
    const existing = config.extra.eas.build.experimental.ios.appExtensions.findIndex((ext) => ext.targetName === targetName);
    if (existing > -1) {
        config.extra.eas.build.experimental.ios.appExtensions[existing] = {
            ...config.extra.eas.build.experimental.ios.appExtensions[existing],
            bundleIdentifier,
        };
    }
    else {
        config.extra.eas.build.experimental.ios.appExtensions.push({
            bundleIdentifier,
            targetName,
        });
    }
    return config;
};
exports.withEASTargets = withEASTargets;
