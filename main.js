import { createApp } from "vue";

import App from "./App.vue";
import ToglBloc from "./components/widgets/toggles/ToglBloc.vue";
import ToglBloc1 from "./components/widgets/toggles/ToglBloc1.vue";
import ToglClassic from "./components/widgets/toggles/ToglClassic.vue";

const app = createApp(App);
app.component(
	"togl-bloc",
	ToglBloc,
	"togl-bloc1",
	ToglBloc1,
	"togl-classic",
	ToglClassic,
),
app.mount("#app");
