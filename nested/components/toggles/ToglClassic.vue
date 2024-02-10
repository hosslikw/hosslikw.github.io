<template>
      <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <div class="togl-container-classic">
            <div class="togl-hold-classic">
               <div class="togl-title-classic">
                  <i class="fa fa-mood-b"></i><span>mood</span>
               </div>
               <div class="togl-switch-classic">
                  <input type="checkbox" id="mood">
                  <label for="mood"></label>
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
	}
})
</script>
