import Bugsnag from '@bugsnag/js';

Bugsnag.start({
   apiKey: '168caa81d43a4fd17076fe9b472c8c1b'
});

document.addEventListener('DOMContentLoaded', (event) => {
   // Select all elements you want to check for the font-family
   // This could be a broad selection if you're unsure where the fonts might be applied
   const elements = document.querySelectorAll('body *');

   console.log(elements.length); // To check how many elements are selected

   elements.forEach(element => {
      var style = window.getComputedStyle(element);
      console.log(style.fontFamily); // To see computed fontFamily
      if (style.fontFamily.includes("Indie Flower") || style.fontFamily.includes("cursive")) {
         console.log("Adding fallback-active class to:", element); // Debug line
         element.classList.add("fallback-active");
      }
   });
});





















