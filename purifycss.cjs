var purify = require("purify-css");

var content = ['indexcopy.html']; // path to your HTML files
var css = ['collapsing-header.css']; // path to your CSS files

var options = {
   output: './purified.css', // output file
   minified: false, // minify the output
   info: true // output information on how much reduction happened
};

purify(content, css, options);
