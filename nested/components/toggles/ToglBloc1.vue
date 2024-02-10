<template>
   <!-- Button to toggle theme -->
   <button @click="handleClick">
      Toggle Theme
   </button>
   <!-- Background and scene for the animation -->
   <div class="tog-backdrop"></div>
   <div class="ogl-scene">
      <!-- Plane and shadow elements -->
      <div class="togl-plane">
         <div class="togl-shadow"></div>
         <!-- Seat element containing the flip animation block -->
         <div class="togl-seat">
            <div class="togl-bloc">
               <!-- Each .togl-bloc__side element represents a side of the flip animation block -->
               <div class="togl-bloc__side">
               </div>
               <div class="togl-bloc__side"></div>
               <div class="togl-bloc__side"></div>
               <div class="togl-bloc__side"></div>
               <div class="togl-bloc__side"></div>
               <div class="togl-bloc__side"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
	mounted() {
		// Apply the initial theme based on the stored value or user preference
		this.applyInitialTheme()
	},
	methods: {
		applyInitialTheme() {
			// Get the stored theme value or use the user's preference if not stored
			const storedTheme = localStorage.getItem("theme-appearance") || "auto"
			// Check if the user prefers a dark theme
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
			// Apply the dark theme if the stored value is 'auto' and the user prefers dark, or if the stored value is 'dark'
			if (storedTheme === "auto" ? prefersDark : storedTheme === "dark") {
				document.documentElement.classList.add("dark")
			} else {
				document.documentElement.classList.remove("dark")
			}
		},
		toggleDarkMode() {
			// Toggle the dark theme
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark")
				localStorage.setItem("theme-appearance", "light")
			} else {
				document.documentElement.classList.add("dark")
				localStorage.setItem("theme-appearance", "dark")
			}
		},
		handleClick() {
			// Call the toggleDarkMode method when the button is clicked
			this.toggleDarkMode()
		},
	},
}
</script>

