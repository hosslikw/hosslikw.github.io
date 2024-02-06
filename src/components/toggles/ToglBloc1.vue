<template>
         <div>
            <button @click="handleClick">
               Toggle Theme
            </button>
            <div class="backdrop"></div>
            <div class="scene">
               <div class="plane">
                  <div class="shadow"></div>
                  <div class="seat">
                     <div class="togl-bloc">
                        <div class="togl-bloc__side">
                           <h1><span>2</span><span>0</span><span>2</span><span>0</span></h1>
                        </div>
                        <!-- Reduced repeated .togl-bloc__side for brevity -->
                     <div class="togl-bloc__side"></div>
                     <div class="togl-bloc__side"></div>
                     <div class="togl-bloc__side"></div>
                     <div class="togl-bloc__side"></div>
                     <div class="togl-bloc__side"></div>
                  </div>
               </di
v>
         </div>
      </div>
   </div>
</template >

<script>
export default {
   mounted() {
      this.applyInitialTheme();
   },
   methods: {
      applyInitialTheme() {
         const storedTheme = localStorage.getItem('theme-appearance') || 'auto';
         const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
         if (storedTheme === 'auto' ? prefersDark : storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
         } else {
            document.documentElement.classList.remove('dark');
         }
      },
      toggleDarkMode() {
         if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme-appearance', 'light');
         } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme-appearance', 'dark');
         }
      },
      handleClick() {
         this.toggleDarkMode();
      },
   },
};
</script>

<style scoped>
</script><style scoped>* {
   box-sizing: border-box;
   transform-style: preserve-3d;
}
:root {
   --perspective: 1200;
   --rotate-x: -40;
   --rotate-y: -45;
   --transform-style: preserve-3d;
   --togl-bloc-width: 30;
   --togl-bloc-height: calc((270 / 480) * var(--togl-bloc-width));
   --togl-bloc-depth: calc((270 / 480) * var(--togl-bloc-width));
   --plane-width: var(--togl-bloc-width);
   --plane-height: calc((270 / 480) * var(--togl-bloc-width));
   --exploded: 0;
   --transition: 0.2s;
   --speed: 0.5s;
   --stagger: -0.1s;
   --bg: hsl(205, 32%, calc((10 + (var(--toggled, 0) * 20)) * 1%));
}
body {
   min-height: 100vh;
   overflow: hidden;
   background: var(--bg);
   margin: 0;
}
[type="checkbox"] {
   height: 0;
   width: 0;
   position: absolute;
   left: 100%;
}
label {
   height: 100vh;
   width: 100vw;
   position: absolute;
   z-index: 10;
}
:checked~.scene,
:checked~.backdrop {
   --toggled: 1;
}
.shadow {
   --bg: hsl(45, 80%, calc((0 + (var(--toggled, 0) * 90)) * 1%));
   height: 100%;
   width: 100%;
   position: absolute;
   background: radial-gradient(ellipse, var(--bg), transparent);
   transform: translate3d(0, calc((50 - (var(--toggled, 0) * 100)) * 1%), 1px) scale(1.15, 1.3);
   will-change: transform;
   transition: transform 0.2s, background 0.2s;
   filter: blur(10px);
}
.seat {
   height: 100%;
   width: 100%;
   transform-origin: 50% 0;
   transform: translate(0, 50%) rotateX(calc(var(--toggled, 0) * 90deg));
   transition: transform 0.2s;
}
.scene {
   perspective: calc(var(--perspective, 800) * 1px);
   transform-style: var(--transform-style);
   height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   transform: translate3d(0, 0, calc((1 * var(--togl-bloc-depth)) * 2vmin));
}
.backdrop {
   --bg: hsl(205, 32%, calc((5 + (var(--toggled, 0) * 5)) * 1%));
   height: 100vh;
   width: 100vw;
   background: var(--bg);
   position: fixed;
   top: 0;
   left: 0;
   transition: background var(--transition);
}
.plane {
   height: calc(var(--plane-height, 25) * 1vmin);
   width: calc(var(--plane-width, 25) * 1vmin);
   transform-style: var(--transform-style);
   transform: rotateX(calc(var(--rotate-x, -24) * 1deg)) rotateY(calc(var(--rotate-y, -24) * 1deg)) rotateX(90deg) translate3d(0, 0, 0);
}
.togl-bloc {
   --width: var(--togl-bloc-width, 15);
   --height: var(--togl-bloc-height, 10);
   --depth: var(--togl-bloc-depth, 4);
   height: calc(var(--depth) * 1vmin);
   width: calc(var(--width) * 1vmin);
   position: absolute;
   transform: translate3d(calc(var(--x, 0) * 1vmin), calc(var(--y, 0) * 1vmin), calc(var(--z, 0) * 1vmin)) rotateX(calc(var(--rotate-togl-bloc-x, 0) * 1deg)) rotateY(calc(var(--rotate-togl-bloc-y, 0) * 1deg)) rotateZ(calc(var(--rotate-togl-bloc-z, 0) * 1deg));
   transform-style: var(--transform-style);
}
.togl-bloc__side {
   transform-style: var(--transform-style);
   transition: transform 0.25s ease;
}
.togl-bloc>div:nth-of-type(1) {
   height: calc(var(--height) * 1vmin);
   width: 100%;
   transform-origin: 50% 50%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc((var(--depth) / (2 - var(--exploded))) * 1vmin));
}
.togl-bloc>div:nth-of-type(2) {
   height: calc(var(--height) * 1vmin);
   width: 100%;
   transform-origin: 50% 50%;
   transform: translate(-50%, -50%) rotateX(-90deg) rotateY(180deg) translate3d(0, 0, calc((var(--depth) / (2 - var(--exploded))) * 1vmin));
   position: absolute;
   top: 50%;
   left: 50%;
}
.togl-bloc>div:nth-of-type(3) {
   height: calc(var(--height) * 1vmin);
   width: calc(var(--depth) * 1vmin);
   transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0, 0, calc((var(--width) / (2 - var(--exploded))) * 1vmin));
   position: absolute;
   top: 50%;
   left: 50%;
}
.togl-bloc>div:nth-of-type(4) {
   height: calc(var(--height) * 1vmin);
   width: calc(var(--depth) * 1vmin);
   transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0, calc((var(--width) / (2 - var(--exploded))) * 1vmin));
   position: absolute;
   top: 50%;
   left: 50%;
}
.togl-bloc>div:nth-of-type(5) {
   height: calc(var(--depth) * 1vmin);
   width: calc(var(--width) * 1vmin);
   transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / (2 - var(--exploded))) * 1vmin));
   position: absolute;
   top: 50%;
   left: 50%;
}
.togl-bloc>div:nth-of-type(6) {
   height: calc(var(--depth) * 1vmin);
   width: calc(var(--width) * 1vmin);
   transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--height) / (2 - var(--exploded))) * -1vmin)) rotateX(180deg);
   position: absolute;
   top: 50%;
   left: 50%;
}
.togl-bloc {
   --z: calc(var(--togl-bloc-height) / 2);
}
.togl-bloc div {
   background: #080808;
}
.togl-bloc div:nth-of-type(1),
.togl-bloc div:nth-of-type(3),
.togl-bloc div:nth-of-type(4),
.togl-bloc div:nth-of-type(6) {
   overflow: hidden;
}
.togl-bloc div:nth-of-type(1):before,
.togl-bloc div:nth-of-type(3):before,
.togl-bloc div:nth-of-type(4):before,
.togl-bloc div:nth-of-type(6):before {
   content: '';
   height: calc((2 * var(--togl-bloc-height)) * 1vmin);
   width: calc((2 * var(--togl-bloc-width)) * 1vmin);
   position: absolute;
   background-size: cover;
}
.togl-bloc div:nth-of-type(1) {
   filter: brightness(calc(1 + (var(--toggled, 0) * 1)));
   background-color: #0d0d0d;
}
.togl-bloc div:nth-of-type(1) h1 {
   opacity: calc(1 - var(--toggled, 0));
   transition: opacity var(--transition) calc((1 - var(--toggled, 0)) * var(--transition));
}
.togl-bloc div:nth-of-type(1):before {
   top: 0;
   left: 50%;
   transform: translate(-50%, 0);
   transform-origin: 0 0;
}
.togl-bloc div:nth-of-type(3) {
   filter: brightness(calc(1 + (var(--toggled, 0) * 2)));
   background-color: #141414;
}
.togl-bloc div:nth-of-type(3):before {
   bottom: 100%;
   left: 0;
   transform: rotate(-90deg) translate(-100%, 50%);
   transform-origin: 0 100%;
}
.togl-bloc div:nth-of-type(4):before {
   top: 0;
   left: 100%;
   transform: rotate(90deg) translate(0, -50%);
   transform-origin: 0 0;
}
.togl-bloc div:nth-of-type(6) h1 {
   opacity: var(--toggled, 0);
}
.togl-bloc div:nth-of-type(6):before {
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 0);
}
</style>
