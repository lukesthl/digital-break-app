"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = require("glob");
const path_1 = __importDefault(require("path"));
const withWidget_1 = __importDefault(require("./withWidget"));
const withXcparse_1 = require("./withXcparse");
const withTargetsDir = (config, { appleTeamId, match = "*" }) => {
    const projectRoot = config._internal.projectRoot;
    const targets = (0, glob_1.sync)(`./targets/${match}/expo-target.config.@(json|js)`, {
        cwd: projectRoot,
        absolute: true,
    });
    targets.forEach((configPath) => {
        config = (0, withWidget_1.default)(config, {
            appleTeamId: appleTeamId,
            ...require(configPath),
            directory: path_1.default.relative(projectRoot, path_1.default.dirname(configPath)),
        });
    });
    return (0, withXcparse_1.withXcodeProjectBetaBaseMod)(config);
};
exports.default = withTargetsDir;
