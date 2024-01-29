import { defineComponent } from "vue"
import ToglBloc from "./togl-bloc.vue"
import ToglBloc1 from "./togl-bloc1.vue"
import ToglClassic from "./togl-classic.vue"

export default defineComponent({
	components: {
		ToglBloc
		, ToglBloc1
		, ToglClassic
	}
	, mounted() {
		if (import.meta.env.MODE === "development") {
			// Assuming devtools is a valid object with a connect method
		}
	}
})
