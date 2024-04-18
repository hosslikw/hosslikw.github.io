import { PurgeCSS } from "purgecss"
import purgeCssConfig from "./purgecss.config.js" // Adjust the path as necessary

describe("PurgeCSS Configuration", () => {
  it("should remove unused CSS without affecting used styles", async () => {
    const content = `<div class="used-class"></div>`
    const css = [
      {
        raw: `.used-class { color: blue; } .unused-class { color: red; }`,
      },
    ]

    const purgeCSSResult = await new PurgeCSS().purge({
      ...purgeCssConfig,
      content: [{ raw: content, extension: "html" }],
      css,
    })

    expect(purgeCSSResult[0].css).toContain(".used-class")
    expect(purgeCSSResult[0].css).not.toContain(".unused-class")
  })
})
