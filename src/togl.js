import { defineComponent } from "vue"
import ToglBloc from "./src/ToglBloc.vue"
import ToglBloc1 from "./src/ToglBloc1.vue"
import ToglClassic from "./src/ToglClassic.vue"

export default defineComponent({
  components: {
    ToglBloc,
    ToglBloc1,
    ToglClassic,
  },
  mounted() {
    if (import.meta.env.MODE === "development") {
      // Assuming devtools is a valid object with a connect method
    }
  },
})
