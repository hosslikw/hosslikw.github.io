/** @format */

import { PurgeCSS } from "purgecss"
import { writeFile } from "fs/promises"
import path from "path"

async function runPurgeCSS() {
	try {

		// 	  content: ["./**/*.html", "./**/*.vue", "./**/*.jsx", "./**/*.tsx"] })
		const content = ["/Users/Kyle/Sites/hosslikw.github.io/src/test-file.html"] // Your HTML files
		const css = ["/Users/Kyle/Sites/hosslikw.github.io/src/test-file.css"] // Your CSS file

		// Running PurgeCSS
		const result = await new PurgeCSS().purge({
			content,
			css
			// Don't specify the 'output' option here
		})

		// Assuming there's only one CSS file in the result
		if (result.length > 0 && result[0].css) {
			const cssFilePath = css[0]
			const cssDir = path.dirname(cssFilePath)
			const outputFilePath = path.join(cssDir, "test-file-purged.css") // New filename

			await writeFile(outputFilePath, result[0].css, "utf-8")
			console.log(`Purged CSS written to ${outputFilePath}`)
		} else {
			console.log("No CSS was purged.")
		}
	} catch (error) {
		console.error("Error running PurgeCSS:", error)
	}
}

runPurgeCSS()
