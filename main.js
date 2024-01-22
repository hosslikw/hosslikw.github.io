import { createApp } from "vue"
import App from "../src/components/views/App.vue"
import router from "./router"

const app = createApp(App) // Use createApp here
app.use(router)
app.mount("#app")
