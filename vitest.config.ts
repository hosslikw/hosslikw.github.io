/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
	const element = document.createElement('div')
	expect(element).not.toBeNull()
})

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		exclude: ['packages/template/*'],
	},
}))