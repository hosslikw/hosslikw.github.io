<!-- @format -->

# WebDev-Portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup- you will run this script once at the begining of yourt development to the development applications.

```sh
npm install
```

### Opens a live server for Development

```sh
npm run vite
```

### Flags errors in your html and suggests the use of other syntax standards

```sh
npm run linthtml
```

### Flags errors in your css and suggests the use of other syntax standards

```sh
npm run lintcss
```

### Flags errors in your javascript, including typescript and suggests the use of other syntax standards

```sh
npm run lintjs
```

### Re-formats your code to meet the specfifications stated in the prettierrc.json

```sh
npm run format
```

### Formats your code then flags errors in your html and css.

```sh
npm run lintandformat
```

### Compiles your css from any css document in your repo into one "-output.css" file.

```sh
npm run postcss
```

### removes all the unused css from your -output.css mand minifies it for distribution.

```sh
npm run purgecss
```

### builds your app or site

```sh
npm run build
```

### type-test, checks your typescript and force runs a build

```sh
npm run type-test
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run vitest
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run cypress
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
