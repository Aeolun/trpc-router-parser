"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_tsconfig_paths_1 = require("vite-tsconfig-paths");
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    plugins: [(0, vite_tsconfig_paths_1.default)()],
    test: {
        include: ["src/**/*.test.ts"],
    },
});
