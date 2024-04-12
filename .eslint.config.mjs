// // eslint.config.mjs
// export default {
//   files: ["**/*.vue", "**/*.js", "**/*.{cy,spec}.js"],
//   ignorePatterns: ["**/*.config.js"],
//   rules: {
//     indent: ["error", "tab"],
//     "linebreak-style": ["error", "unix"],
//     quotes: ["error", "double"],
//     semi: ["error", "always"],
//   },
//   env: {
//     browser: true,
//     es2022: true,
//   },
//   root: true,
//   extends: [
//     "eslint:recommended",
//     "plugin:vue/base",
//     "plugin:vue/vue3-strongly-recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:markdown/recommended",
//     "plugin:cypress/recommended",
//   ],
//   parser: "@babel/eslint-parser", // Corrected parser name
//   parserOptions: {
//     requireConfigFile: false,
//     ecmaVersion: 2022,
//     sourceType: "module",
//   },
//   plugins: ["vue", "jsx-a11y", "markdown"], // Ensure these plugins are installed
// }
