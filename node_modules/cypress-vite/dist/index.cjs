'use strict';

const path = require('path');
const Debug = require('debug');
const vite = require('vite');
const chokidar = require('chokidar');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const path__default = /*#__PURE__*/_interopDefaultCompat(path);
const Debug__default = /*#__PURE__*/_interopDefaultCompat(Debug);
const chokidar__default = /*#__PURE__*/_interopDefaultCompat(chokidar);

const debug = Debug__default("cypress-vite");
const watchers = {};
function vitePreprocessor(userConfig) {
  const config = typeof userConfig === "string" ? { configFile: userConfig } : userConfig ?? {};
  debug("User config path: %s", config.configFile);
  return async (file) => {
    const { outputPath, filePath, shouldWatch } = file;
    debug("Preprocessing file %s", filePath);
    const fileName = path__default.basename(outputPath);
    const filenameWithoutExtension = path__default.basename(
      outputPath,
      path__default.extname(outputPath)
    );
    if (shouldWatch && !watchers[filePath]) {
      let initial = true;
      watchers[filePath] = chokidar__default.watch(filePath);
      debug("Watcher for file %s cached", filePath);
      file.on("close", async () => {
        await watchers[filePath].close();
        delete watchers[filePath];
        debug("File %s closed.", filePath);
      });
      watchers[filePath].on("all", () => {
        if (!initial) {
          file.emit("rerun");
        }
        initial = false;
      });
    }
    const defaultConfig = {
      logLevel: "warn",
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      },
      build: {
        emptyOutDir: false,
        minify: false,
        outDir: path__default.dirname(outputPath),
        sourcemap: true,
        write: true,
        watch: null,
        lib: {
          entry: filePath,
          fileName: () => fileName,
          formats: ["umd"],
          name: filenameWithoutExtension
        },
        rollupOptions: {
          output: {
            // override any manualChunks from the user config because they don't work with UMD
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            manualChunks: false
          }
        }
      }
    };
    await vite.build({
      ...config,
      ...defaultConfig
    });
    return outputPath;
  };
}

module.exports = vitePreprocessor;
