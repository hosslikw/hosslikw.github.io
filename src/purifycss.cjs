var purify = require("purify-css");

var content = ['src/components/header/indexcopy.html']; // path to your HTML files
var css = ['src/components/header/collapsing-header.css']; // path to your CSS files

var options = {
   output: './purified.css', // output file
   minified: false, // minify the output
   info: true // output information on how much reduction happened
};

purify(content, css, options);
