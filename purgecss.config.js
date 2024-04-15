import purgeHtml from "purgecss-from-html";
import purgeJs from "purgecss-from-js";

const options = {
   content: ['**/*.html'],
   css: ['**/*.css'],
   extractors: [
      {
         extractor: purgeJs,
         extensions: ["js"],
      },
      {
         extractor: purgeHtml,
         extensions: ["html"],
      }
   ],
   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};

export default options;