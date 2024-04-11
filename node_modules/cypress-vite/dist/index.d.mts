import { InlineConfig } from 'vite';

type FileObject = Cypress.FileObject;
type CypressPreprocessor = (file: FileObject) => Promise<string>;
/**
 * Cypress preprocessor for running e2e tests using vite.
 *
 * @param {InlineConfig | string} config - Vite config object, or path to user
 * Vite config file for backwards compatibility
 * @example
 * setupNodeEvents(on) {
 *   on(
 *     'file:preprocessor',
 *     vitePreprocessor(path.resolve(__dirname, './vite.config.ts')),
 *   )
 * },
 */
declare function vitePreprocessor(userConfig?: InlineConfig | string): CypressPreprocessor;

export { vitePreprocessor as default };
