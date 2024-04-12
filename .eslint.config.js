<<<<<<< HEAD
// const reactRecommended = require('eslint-plugin-react/configs/recommended');
// const globals = require('globals');

// module.exports = [
//   …
//   {
//     files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
//     ...reactRecommended,
//   },
//   {
//     files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
//     languageOptions: {
//       globals: {
//         ...globals.serviceworker,
//         ...globals.browser,
//       },
//     },
//   },
//   …
// ];
//   extends: [
//     "eslint:recommended",
//     "plugin:vue/base",
//     "plugin:vue/vue3-strongly-recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:markdown/recommended",
//     "plugin:cypress/recommended",
//     "plugin:json/recommended",
//     "plugin:jsonc/recommended",
//     "plugin:babel/recommended",
//     "plugin:prettier/recommended",
//     "plugin:html/recommended",
//     "plugin:tailwind/recommended",
//     "plugin:react/recommended"
//   ],
//   rules: js.configs.recommended.rules

//   files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
//   parserOptions: {
//     sourceType: "script",
//   },
// },
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     parser: "eslint/parser",
//     sourceType: "module",
//   },
//   rules: {
//     indent: ["error", "tab"],
//     "linebreak-style": ["error", "unix"],
//     quotes: ["error", "double"],
//     semi: ["error", "never"],
//   },
// }
=======
import js from "@eslint/js";
export default [
    js.configs.recommended,
    (
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
   }
];


onst reactRecommended = require("eslint-plugin-react/configs/recommended")
const globals = require("globals")

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
]
module.exports = {
  extends: [
    "eslint-plugin-eslint-comments/recommended",
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:markdown/recommended",
    "plugin:cypress/recommended",
    "plugin:json/recommended",
    "plugin:jsonc/recommended",
    "plugin:babel/recommended",
    "plugin:prettier/recommended",
    "plugin:html/recommended",
    "plugin:tailwind/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    ...reactRecommended.rules,
  },
  parserOptions: {
    ecmaVersion: "latest",
    parser: "eslint/parser",
    sourceType: "module",
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
>>>>>>> 1a43bc78 (sync)
