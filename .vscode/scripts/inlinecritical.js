const inline = require('inline-critical')
const fs = require('fs') // Ensure you have required fs module

const html = fs.readFileSync('path/to/your/index.html', 'utf8')
const critical = fs.readFileSync('path/to/your/critical.css', 'utf8')
const inlined = inline(html, critical)
// Further processing or output of inlined
