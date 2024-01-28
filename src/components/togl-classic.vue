<template>
   <div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <div class="container">

         <div class="togl-hold">
            <div class="togl-title">
               <i class="fa fa-mood-b"></i><span>mood</span>
            </div>
            <div class="togl-switch">
               <input type="checkbox" id="mood">
               <label for="mood"></label>
            </div>
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
* {
   box-shadow: none;
}

body {
   font-family: 'Poppins', sans-serif;
   margin: 0;
   width: 100%;
   height: 100vh;
   background-color: #d1dad3;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 17px;
}

.container {
   max-width: 1000px;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
}

.togl-hold {
   display: flex;
   padding: 10px 20px;
   border-radius: 10px;
   margin-bottom: 30px;
   box-shadow: -8px -8px 15px rgba(255, 255, 255, .7),
      10px 10px 10px rgba(0, 0, 0, .3),
      inset 8px 8px 15px rgba(255, 255, 255, .7),
      inset 10px 10px 10px rgba(0, 0, 0, .3);
   justify-content: space-between;
   align-items: center;
}

.togl-title {
   width: 150px;
}

.togl-title i {
   margin-right: 5px;
}

.togl-switch {
   height: 40px;
}

.togl-switch input[type="checkbox"] {
   position: absolute;
   opacity: 0;
   z-index: -2;
}

.togl-switch input[type="checkbox"]+label {
   position: relative;
   display: inline-block;
   width: 100px;
   height: 40px;
   border-radius: 20px;
   margin: 0;
   cursor: pointer;
   box-shadow: inset -8px -8px 15px rgba(255, 255, 255, .6),
      inset 10px 10px 10px rgba(0, 0, 0, .25);

}

.togl-switch input[type="checkbox"]+label::before {
   position: absolute;
   content: 'OFF';
   font-size: 13px;
   text-align: center;
   line-height: 25px;
   top: 8px;
   left: 8px;
   width: 45px;
   height: 25px;
   border-radius: 20px;
   background-color: #d1dad3;
   box-shadow: -3px -3px 5px rgba(255, 255, 255, .5),
      3px 3px 5px rgba(0, 0, 0, .25);
   transition: .3s ease-in-out;
}

.togl-switch input[type="checkbox"]:checked+label::before {
   left: 50%;
   content: 'ON';
   color: #fff;
   background-color: #00b33c;
   box-shadow: -3px -3px 5px rgba(255, 255, 255, .5),
      3px 3px 5px #00b33c;
}
</style>