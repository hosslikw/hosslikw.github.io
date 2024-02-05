import { createApp } from 'vue';
import ToglBloc from './components/toggles/ToglBloc.vue';
// Assuming main.js is in the src/ directory and your Vue components are in src/components/toggles/
import ToglBloc1 from './components/toggles/ToglBloc1.vue';

import ToglClassic from './components/toggles/ToglClassic.vue';


// Assuming each component is self-contained and doesn't require props/data from a parent
if (document.querySelector('#ToglBloc-mount')) {
   createApp(ToglBloc).mount('#togl-bloc-mount');
}

if (document.querySelector('#ToglBloc1-mount')) {
   createApp(ToglBloc1).mount('#togl-bloc1-mount');
}

if (document.querySelector('#ToglClassic-mount')) {
   createApp(ToglClassic).mount('#togl-classic-mount');
}
