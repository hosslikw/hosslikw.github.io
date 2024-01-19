import path from 'node:path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const virtualFile = '@virtual-file'
const virtualId = '\0' + virtualFile
const nestedVirtualFile = '@nested-virtual-file'
const nestedVirtualId = '\0' + nestedVirtualFile

const base = '/test/'

// preserve this to test loading __filename & __dirname in ESM as Vite polyfills them.
// if Vite incorrectly load this file, node.js would error out.
globalThis.__vite_test_filename = __filename
globalThis.__vite_test_dirname = __dirname

export default defineConfig({ command, ssrBuild, isSsrBuild }) => ({
	base,
	plugins: [
		vuePlugin(),
		vueJsx(),
		{
			name: 'virtual',
			resolveId(id) {
				if (id === '@foo') {
					return id
				}
			},
			load(id, options) {
				const ssrFromOptions = options?.ssr ?? false
				if (id === '@foo') {
					// Force a mismatch error if ssrBuild/isSsrBuild is different from ssrFromOptions
					return `export default { msg: '${command === 'build' && !!(ssrBuild ?? isSsrBuild) !== ssrFromOptions
						? `defineConfig ssrBuild !== ssr from load options`
						: 'hi'
						}' }`
				}
			},
		},
		{
			name: 'virtual-module',
			resolveId(id) {
				if (id === virtualFile) {
					return virtualId
				} else if (id === nestedVirtualFile) {
					return nestedVirtualId
				}
			},
			load(id) {
				if (id === virtualId) {
					return `export { msg } from "@nested-virtual-file";`
				} else if (id === nestedVirtualId) {
					return `export const msg = "[success] from conventional virtual file"`
				}
			},
		},
		// Example of a plugin that injects a helper from a virtual module that can
		// be used in renderBuiltUrl
		(function () {
			const queryRE = /\?.*$/s
			const hashRE = /#.*$/s
			const cleanUrl = (url) => url.replace(hashRE, '').replace(queryRE, '')
			let config

			const virtualId = '\0virtual:ssr-vue-built-url'
			return {
				name: 'built-url',
				enforce: 'post',
				configResolved(_config) {
					config = _config
				},
				resolveId(id) {
					if (id === virtualId) {
						return id
					}
				},
				load(id) {
					if (id === virtualId) {
						return {
							code: `export const __ssr_vue_processAssetPath = (url) => '${base}' + url`,
							moduleSideEffects: 'no-treeshake',
						}
					}
				},
				transform(code, id) {
					const cleanId = cleanUrl(id)
					if (
						config.build.ssr &&
						(cleanId.endsWith('.js') || cleanId.endsWith('.vue')) &&
						!code.includes('__ssr_vue_processAssetPath')
					) {
						return {
							code:
								`import { __ssr_vue_processAssetPath } from '${virtualId}';__ssr_vue_processAssetPath;` +
								code,
							sourcemap: null, // no sourcemap support to speed up CI
						}
					}
				},
			}
		})(),
	],
	experimental: {
		/**
		 * Renders the built URL based on the given filename and options.
		 *
		 * @param {string} filename - The name of the file.
		 * @param {object} options - The options for rendering the URL.
		 * @param {string} options.hostType - The host type.
		 * @param {string} options.type - The type of the URL.
		 * @param {boolean} options.ssr - Indicates if server-side rendering is enabled.
		 * @return {object} The rendered URL object.
		 */
		renderBuiltUrl(filename, { hostType, type, ssr }) {
			if (ssr && type === 'asset' && hostType === 'js') {
				return {
					runtime: `__ssr_vue_processAssetPath(${JSON.stringify(filename)})`,
				}
			}
		},
	},

	build: {
		minify: false,
	},
	ssr: {
		noExternal: [
			// this package has uncompiled .vue files
			'@vitejs/test-example-external-component',
		],
	},
	optimizeDeps: {
		exclude: ['@vitejs/test-example-external-component'],
	},

	server: {
		port: 3001
	},
	root: __dirname,
	build: {
		outDir: path.join(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html")
				// Add other entries if necessary
			}
		}
	},
	test: {
		environment: "jsdom",
		exclude: ["e2e/*"], // you can adjust this exclude pattern to fit your needs
		root: fileURLToPath(new URL("./", import.meta.url))
	}
})
