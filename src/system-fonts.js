window.onload = function () {
   // Select all elements with the class 'font-example'
   var elements = document.querySelectorAll(".font-example");

   // Loop through the selected elements
   for (var i = 0; i < elements.length; i++) {
      // Get the computed style of the element
      var style = window.getComputedStyle(elements[i]);

      // Check if the fallback font is being used
      if (style.fontFamily.includes("cursive")) {
         // Add the 'fallback-active' class to the parent font-grid element
         elements[i].closest(".font-grid").classList.add("fallback-active");
      }
   }
};
