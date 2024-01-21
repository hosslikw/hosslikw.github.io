/** @format */

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/html/-cv.html",
			name: "cv",
			// route level code-splitting
			// Generates a separate chunk (About.[hash].js) for this route
			// Lazy-loaded when the route is visited
			component: () => import("src/components/views")
		}
	]
})

export default router
