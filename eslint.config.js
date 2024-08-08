import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all, // optional unless you're using "eslint:all"
});

export default [
  // mimic environments
  ...compat.env({
    es2020: true,
    node: true,
  }),

  // translate an entire config
  ...compat.config({
    extends: "eslint:recommended",
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      "no-tabs": "off", // adjusted rule name for disabling tabs
      "no-undef": "off", // adjusted rule name for disabling undefined variables
    },
    globals: {
      $: "readonly",
    },
  }),
  {
    files: ["src/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
  },
];