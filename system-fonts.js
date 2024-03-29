const CLICK = "click"
const LOCAL_FONTS = "local-fonts"
const PERMISSIONS = navigator.permissions

const checkPermission = async function () {
	try {
		const status = await navigator.permissions.query({ name: "local-fonts" })
		if (status.state === "granted") {
			console.log("previously granted 👍")
			useLocalFonts()
		} else if (status.state === "prompt") {
			console.log("awaiting permission 🫣")
		} else {
			console.log("previously restricted 🫢")
		}
	} catch (err) {
		console.error("Error checking permission:", err)
	}
}
const requestPermission = async () => {
	try {
		const permission = await PERMISSIONS.request({ name: LOCAL_FONTS })
		if (state === "granted") {
			console.log("permission granted 👍")
			useLocalFonts()
		} else {
			console.log("permission denied 👎")
		}
	} catch (err) {
		if (err.name === TYPE_ERROR) {
			console.log("permission unspecified 🤷")
		} else {
			console.error("Error requesting permission:", err)
		}
	}
}
const array = [
	{ id: "font_001", fullName: "Arial", postscriptName: "Arial" },
	{ id: "font-002", fullName: "Roboto", postscriptName: "Roboto" }
]
const useLocalFonts = function () {
	const fontFamilies = array.map((font) => font.fullName)
	const liElements = document.querySelectorAll(".parent li")
	liElements.forEach((li) => {
		if (fontFamilies.includes(window.getComputedStyle(li).getPropertyValue("font-family"))) {
			li.classList.add("system-font-active")
		}
	})
}

checkPermission()

function fontOptions() {
	var popup = document.getElementById("my-options")
	popup.classList.toggle("show")
}
// function myFunction() {
// var optionsMenu = document.getElementById("fontOptions");
// popup.classList.toggle("show");
// }
