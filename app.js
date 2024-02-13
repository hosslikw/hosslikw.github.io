import Bugsnag from '@bugsnag/js';

Bugsnag.start({
   apiKey: '168caa81d43a4fd17076fe9b472c8c1b'
});

console.log(elements.length); // To check if elements are selected
for (var i = 0; i < elements.length; i++) {
   var style = window.getComputedStyle(elements[i]);
   console.log(style.fontFamily); // To see computed fontFamily
   if (style.fontFamily.includes("Indie Flower") || style.fontFamily.includes("cursive")) {
      console.log("Adding fallback-active class to:", elements[i]); // Debug line
      elements[i].closest(".font-grid").classList.add("fallback-active");
   }
}
