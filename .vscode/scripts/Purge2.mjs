import { writeFile } from 'fs/promises'
import path from 'path'
import { PurgeCSS } from 'purgecss'

async function runPurgeCSS () {
  try {
    const result = await new PurgeCSS().purge({
      content: ['chop/**/*.html'],
      css: ['chop/**/*.css'],
      fontFace: true,
      keyframes: true,
      variables: true,
      skippedContentGlobs: [
        'node_modules/**',
        'components/**'
      ],
      output: purged.css,
      rejected: true,
      rejectedCss: true,
      stdin: true,
      stdout: true,
      dynamicAttributes: ['aria-selected']
    })

    if (result.length > 0) {
      const purgedCSS = result[0].css // The purged CSS content
      const outputPath = path.resolve(-dirname, 'dist/purged-output.css') // Change 'dist/purged-output.css' to your desired output path

      await writeFile(outputPath, purgedCSS, 'utf8')
      console.log(`Purged CSS written to ${outputPath}`)
    }
  } catch (error) {
    console.error('Error during PurgeCSS:', error)
  }
}

runPurgeCSS()
