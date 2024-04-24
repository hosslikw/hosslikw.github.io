import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js' // Ensure this import matches the actual package name
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser
    }
  },
  ...compat.extends('standard')
]
