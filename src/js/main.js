//SECTION - Shrinking Header//// Define a function to set up the shrinking of the SVG
export function setupShrink(svgElement) {
  // Time delay in milliseconds (e.g., 2200ms = 2.2 seconds)
  const delay = 2200;
  // Function to add the class to the SVG element
  const applyShrink = () => {
    svgElement.classList.add('resized-svg');
  };
  // Set a timeout to apply the shrinking effect after the delay
  setTimeout(applyShrink, delay);
}
// Use the function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const headerTop = document.getElementById('header-top');
  const svgElement = headerTop.querySelector('img');
  setupShrink(svgElement);
});


//!SECTION -Shrinking Header//


//SECTION - Visitor Info - Date and Time - Screen Resolution//
   const updateDateTime = () => {
      const now = new Date();
      const datetime = now.toLocaleString();
      document.getElementById("datetime").innerHTML = datetime;
   }

   const updateScreenResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const screenResolution = `${width} x ${height}`;
      document.querySelector(".screen-res").innerHTML = screenResolution;
   }

   // Initial update
   updateDateTime();
   updateScreenResolution();

   // Update every second
   setInterval(updateDateTime, 1000);

   // Update screen resolution on resize
   window.addEventListener("resize", updateScreenResolution);
//!SECTION -Visitor Info - Date and Time - Screen Resolution

//SECTION - Date updater for custom 404 pg//
   const updateDate = () => {
   const now = new Date();
   const date = now.toLocaleDateString(); // Use toLocaleDateString instead of toLocaleString
   document.getElementById("date").innerHTML = date;
   }

   // Initial update
   updateDate();

   // Update every day (not every second, since we're only showing the date)
   setInterval(updateDate, 86400000); // 86400000 milliseconds = 24 hours

//SECTION - Themes//
   (function () {
      const setTheme = (theme) => {
         document.documentElement.setAttribute("data-theme", theme);
         window.localStorage.setItem("theme", theme);
      };

      const updateIndicators = (currentTheme) => {
         const darkIndicatorText = document.querySelector(".dark-indicator-text");
         const animalIndicatorText = document.querySelector(".animal-indicator-text");
         const darkThemeToggle = document.getElementById("dark-theme-toggle");
         const animalThemeToggle = document.getElementById("animal-theme-toggle");

         if (currentTheme === "dark") {
            darkIndicatorText.textContent = "Y";
            darkThemeToggle.setAttribute("aria-pressed", "true");
            animalIndicatorText.textContent = "N";
            animalThemeToggle.setAttribute("aria-pressed", "false");
         } else if (currentTheme === "animal") {
            animalIndicatorText.textContent = "Y";
            animalThemeToggle.setAttribute("aria-pressed", "true");
            darkIndicatorText.textContent = "N";
            darkThemeToggle.setAttribute("aria-pressed", "false");
         } else {
            darkIndicatorText.textContent = "N";
            darkThemeToggle.setAttribute("aria-pressed", "false");
            animalIndicatorText.textContent = "N";
            animalThemeToggle.setAttribute("aria-pressed", "false");
         }
      };

      const toggleDarkTheme = () => {
         let currentTheme = document.documentElement.getAttribute("data-theme") || "light";
         if (currentTheme === "dark") {
            setTheme("light");
         } else {
            setTheme("dark");
         }
         updateIndicators(document.documentElement.getAttribute("data-theme"));
      };

      const toggleAnimalTheme = () => {
         let currentTheme = document.documentElement.getAttribute("data-theme") || "light";
         if (currentTheme === "animal") {
            setTheme("light");
         } else {
            setTheme("animal");
         }
         updateIndicators(document.documentElement.getAttribute("data-theme"));
      };

      document.addEventListener("DOMContentLoaded", () => {
         const darkThemeToggle = document.getElementById("dark-theme-toggle");
         const animalThemeToggle = document.getElementById("animal-theme-toggle");

         let theme = window.localStorage.getItem("theme") || "light";
         setTheme(theme);
         updateIndicators(theme);

         darkThemeToggle.addEventListener("click", toggleDarkTheme, false);
         animalThemeToggle.addEventListener("click", toggleAnimalTheme, false);
      });
   })();
//!SECTION -Themes//


//SECTION - Modal Expantion//
    /**
      * Initializes the modal functionality for the projects button.
      *
      * This function attaches event listeners to the projects button and the close button.
      * When the projects button is clicked, it toggles the aria-expanded attribute,
      * hides or shows the modal, and applies or removes the blur effect to the blurred content.
      * When the close button is clicked, it hides the modal, removes the modal-active class from the body,
      * and removes the blur effect from the blurred content.
      */
      const initializeModal = () => {
      // Get the projects button and modal container elements
      const modalButton = document.getElementById("projects-modal");
      const modalContainer = document.getElementById("my-modal");

      // Get the body element
      const body = document.body;

      // Get all elements with the class "blurred-content"
      const blurredContent = document.querySelectorAll(".blurred-content");

      /**
      * Toggles the blur effect on the blurred content.
      *
      * @param {boolean} isActive - Indicates whether the blur effect should be applied (true) or removed (false).
      */
      const toggleBlur = (isActive) => {
         blurredContent.forEach(content => {
            content.classList.toggle("blur", isActive);
         });
      };

      // Add a click event listener to the projects button
      modalButton.addEventListener("click", (event) => {
         event.preventDefault();

         // Get the current aria-expanded attribute value
         const isExpanded = modalButton.getAttribute("aria-expanded") === "true";

         // Toggle the aria-expanded attribute value
         modalButton.setAttribute("aria-expanded", !isExpanded);

         // Toggle the aria-hidden attribute value
         modalContainer.setAttribute("aria-hidden", isExpanded);

         // Toggle the display of the modal
         modalContainer.style.display = !isExpanded ? "flex" : "none";

         // Toggle the modal-active class on the body
         body.classList.toggle("modal-active", !isExpanded);

         // Toggle the blur effect on the blurred content
         toggleBlur(!isExpanded);
      });

      // Get the close button within the modal container
      const closeButton = modalContainer.querySelector(".modal-close");

      // Add a click event listener to the close button
      closeButton.addEventListener("click", (event) => {
         event.stopPropagation();

         // Hide the modal
         modalContainer.style.display = "none";

         // Remove the modal-active class from the body
         body.classList.remove("modal-active");

         // Reset the aria-expanded attribute value
         modalButton.setAttribute("aria-expanded", "false");

         // Reset the aria-hidden attribute value
         modalContainer.setAttribute("aria-hidden", "true");

         // Remove the blur effect from the blurred content
         toggleBlur(false);
      });
      };

      // Call the initializeModal function to set up the modal functionality
      initializeModal();

//!SECTION -Modal Expantion//