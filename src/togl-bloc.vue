<template>
   <div class="togl-box">
      <div class="togl-box-inner">
         <div class="togl-box-front">
            <h2>Front</h2>
         </div>
         <div class="togl-box-back">
            <h2>Back</h2>
         </div>
      </div>

   </div>
</template>

<script lang="ts">
(() => {
   const storedTheme = localStorage.getItem("vitepress-theme-appearance") || "auto";
   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
   if (!storedTheme || storedTheme === "auto" ? prefersDark : storedTheme === "dark") {
      document.documentElement.classList.add("dark");
   }
})();
</script>

<style scoped>
.togl-box {
   width: 200px;
   height: 200px;
   perspective: 1000px;
}

.togl-box-inner {
   position: relative;
   width: 100%;
   height: 100%;
   text-align: center;
   transition: transform 0.8s;
   transform-style: preserve-3d;
}

.togl-box:hover .togl-box-inner {
   transform: rotateY(180deg);
}

.togl-box-front,
.togl-box-back {
   position: absolute;
   width: 100%;
   height: 100%;
   backface-visibility: hidden;
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