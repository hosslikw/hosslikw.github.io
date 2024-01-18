// purgecss-script.mjs
import PurgeCSS from "@fullhuman/postcss-purgecss"
import fs from "fs/promises"
import config from "purgecss.config.mjs"
;(async () => {
	try {
		const purgeCSSResults = await new PurgeCSS().purge(config)
		await fs.writeFile("purged.css", purgeCSSResults[0].css, "utf-8")
		console.log("PurgeCSS has completed and the file has been saved.")
	} catch (error) {
		console.error("An error occurred:", error)
	}
})()
