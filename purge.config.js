import PurgeCSS from 'purgecss'
import fs from 'fs'
import purgeHtml from 'purgecss-html-extractor'
import purgeJs from 'purgecss-js-extractor'

const purgeCSSResult = async () => {
  const purgeCSS = new PurgeCSS()
  const result = await purgeCSS.purge({
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'],
    css: ['./src/**/*.css'],
    extractors: [
      {
        extractor: purgeJs,
        extensions: ['js']
      },
      {
        extractor: purgeHtml,
        extensions: ['html']
      }
    ],
    keyframes: true,
    fontFace: true,
    whitelistPatterns: [/^:root$/, /^body$/, /^html$/],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

  result.forEach(out => {
    fs.writeFileSync(`./build/static/${out.file}`, out.css, 'utf-8')
  })
}

export default purgeCSSResult
