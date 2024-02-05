<template>
         <input id="toggle" type="checkbox" aria-label="3d box toggle" /><label for="toggle"></label>
         <div class="togl-box">
            <div class="togl-box-inner">
               <div class="togl-box-front">
                  <h2>D</h2>
            </div>
            <div class="togl-box-back">
                  <h2>L</h2>
               </div>
         </
div>
   </div>
</template>

<script>
import { defineComponent } from "vue"

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

<style scoped>
#toggle {
   position: absolute;
   opacity: 0;
   width: 0;
   height: 0;
}

/* Adjust the CSS selector for toggling on click */
#toggle:checked+.togl-box .togl-box-inner {
   transform: rotateY(180deg);
}
.togl-box {
   position: relative;
   width: 50px;
   height: 50px;
   perspective: 1000px;
   border: 2px solid;
}

.togl-box-inner {
   display: grid;
   place-items: center;
   /* Center both horizontally and vertically */
   height: 100%;
   transition: transform 0.8s;

}

/*.togl-box:hover .togl-box-inner {
   transform: rotateY(180deg)
   translateX(-50px);
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
   width: 100%;
   height: 100%;
   backface-visibility: hidden;
   text-align: center;
   /* Ensure text is centered */
}

.togl-box-front {
   background-color: #bbb;
   color: black;
}

.togl-box-back {
   background-color: #555;
   color: white;
   transform: rotateY(180deg);
}
</style>
