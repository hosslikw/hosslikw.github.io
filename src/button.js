import { createVNode, defineComponent } from "vue"
import "../assets/button.css"
import { createApp } from 'vue';
import ToglBloc from './components/togl-bloc.vue';
import ToglBloc1 from './components/togl-bloc1.vue';
import ToglClassic from './components/togl-classic.vue';

const app = createApp({});

app.component('ToglBloc', ToglBloc);
app.component('ToglBloc1', ToglBloc1);
app.component('ToglClassic', ToglClassic);

app.mount('#app');

export default defineComponent({
	setup() {
		return () => {
			return createVNode(
				"div",
				{
					class: "btn"
				},
				"dynamicBtn"
			)
		}
	}
})