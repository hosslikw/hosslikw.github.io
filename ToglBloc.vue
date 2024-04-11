<template>
                           <div>
                              <input id="togl-box" type="checkbox" aria-label="3d box toggle">
                              <label for="toggle"></label>
                              <div class="togl-box">
                                 <div class="togl-box-inner">
                                    <div class="togl-box-front">
                                       <h2>D</h2>
                                    </div>
                                    <div class="togl-box-back">
                                    <h2>L</h2>
                              </div>
                  </div>
            </div>
         </div>
</template>

<script>
export default defineComponent({
	mounted() {
		this.applyInitialTheme()
	},
	methods: {
		applyInitialTheme() {
			const storedTheme = localStorage.getItem("vitepress-theme-appearance") || "auto"
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
			if (!storedTheme || storedTheme === "auto" ? prefersDark : storedTheme === "dark") {
				document.documentElement.classList.add("dark")
			} else {
				document.documentElement.classList.remove("dark")
			}
		},
		toggleDarkMode() {
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark")
				localStorage.setItem("vitepress-theme-appearance", "light")
			} else {
				document.documentElement.classList.add("dark")
				localStorage.setItem("vitepress-theme-appearance", "dark")
			}
	   }
})
</script>

 scoped>
   #togl-box {
   position: absolute;
   opacity: 0;
   inline-size: 0;
   block-size: 0;
}

/* Adjust the CSS selector for toggling on click */
#toggle:checked+.togl-box .togl-box-inner {
   transform: rotateY(180deg);
}
.togl-box {
   position: relative;
   inline-size: var(--s50);
   block-size: var(--s50);
   perspective: var(--s1000);
   border: var(--s2) solid;
}

.togl-box-inner {
   display: grid;
   place-items: center;
   /* Center both horizontally and vertically */
   block-size: 100%;
   transition: transform 0.8s;

}

/*.togl-box:hover .togl-box-inner {
   transform: rotateY(180deg)
   translateX(calc(-1 * var(--s50)));
}*/

.togl-box-front,
.togl-box-back {
   display: flex;
   /* Use flexbox to center the content */
   justify-content: center;
   /* Center horizontally */
   align-items: center;
   /* Center vertically */
   position: absolute;
   inline-size: 100%;
   block-size: 100%;
   backface-visibility: hidden;
   text-align: center;
   /* Ensure text is centered */
}

.togl-box-front {
   background-color: #bbb;
<<<<<<< HEAD
   color: black;
=======
   color: var(--black);
>>>>>>> 5dc39fa4 (2)
}

.togl-box-back {
   background-color: #555;
   color: white;
   transform: rotateY(180deg);
}
</style>
