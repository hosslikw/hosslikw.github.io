const purify = require('purify-css')

const content = ['indexcopy.html'] // path to your HTML files
const css = ['collapsing-header.css'] // path to your CSS files

const options = {
  output: './purified.css', // output file
  minified: false, // minify the output
  info: true // output information on how much reduction happened
}

purify(content, css, options)
