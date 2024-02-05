import { createApp } from "vue"
import App from "./App.vue" // The root component
import ToglBloc from "./components/toggles/ToglBloc.vue"
import ToglBloc1 from "./components/toggles/ToglBloc1.vue"
import ToglClassic from "./components/toggles/ToglClassic.vue"

const app = createApp(App)

// Register your components globally
app.component("ToglBloc", ToglBloc)
app.component("ToglBloc1", ToglBloc1)
app.component("ToglClassic", ToglClassic)

app.mount("#app")
