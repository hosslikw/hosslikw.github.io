/**
 * global browser, document, matchMedia, addEventListener, navigator, prompt, URL, MouseEvent, Blob, setInterval, DOMParser
 *
 * @format
 */

document.addEventListener("DOMContentLoaded", (event) => {
	const note = document.querySelector(".note")
	const header = note.querySelector("header")
	const resizeHandle = note.querySelector(".note-resize")

	let isDragging = false,
		isResizing = false
	let startX, startY, startWidth, startHeight

	// Dragging
	header.addEventListener("mousedown", (e) => {
		startX = e.clientX - note.offsetLeft
		startY = e.clientY - note.offsetTop
		isDragging = true
	})

	document.addEventListener("mousemove", (e) => {
		if (isDragging) {
			note.style.left = e.clientX - startX + "px"
			note.style.top = e.clientY - startY + "px"
		}
		if (isResizing) {
			note.style.width = startWidth + (e.clientX - startX) + "px"
			note.style.height = startHeight + (e.clientY - startY) + "px"
		}
	})

	document.addEventListener("mouseup", () => {
		isDragging = false
		isResizing = false
	})

	// Resizing
	resizeHandle.addEventListener("mousedown", (e) => {
		startX = e.clientX
		startY = e.clientY
		startWidth = note.offsetWidth
		startHeight = note.offsetHeight
		isResizing = true
		e.preventDefault()
	})
})

const addNoteButton = document.querySelector(".add-note-button")

let tabData,
	tabDataContents = [],
	downloadParser
addNoteButton.title = browser.i18n.getMessage("editorAddNote")
toggleNotesButton.title = browser.i18n.getMessage("editorToggleNotes")

addPinkNoteButton.onmouseup = () => editorElement.contentWindow.postMessage(JSON.stringify({ method: "addNote", color: "note-pink" }), "*")

document.addEventListener(
	"mouseup",
	(event) => {
		if (event.target.tagName.toLowerCase() != INFOBAR_TAGNAME) {
			editorElement.contentWindow.focus()
			toolbarOnTouchEnd(event)
		}
	},
	true
)

toggleNotesButton.onmouseup = () => {
	if (toggleNotesButton.getAttribute("src") == "") {
		toggleNotesButton.src = "media_assets/note/button_note_hidden.png"
		editorElement.contentWindow.postMessage(JSON.stringify({ method: "hideNotes" }), "*")
	} else {
		toggleNotesButton.src = "media_assets/note/button_note_hidden.png"
		editorElement.contentWindow.postMessage(JSON.stringify({ method: "displayNotes" }), "*")
	}
}

let toolbarPositionPointer, toolbarMoving, toolbarTranslateMax
let orientationPortrait = matchMedia("(orientation: portrait)").matches
let toolbarTranslate = 0
toolbarElement.ondragstart = (event) => event.preventDefault()
toolbarElement.ontouchstart = toolbarOnTouchStart
toolbarElement.onmousedown = toolbarOnTouchStart
toolbarElement.ontouchmove = toolbarOnTouchMove
toolbarElement.ontouchend = toolbarOnTouchEnd

function viewportSizeChange() {
	orientationPortrait = matchMedia("(orientation: portrait)").matches
	toolbarElement.style.setProperty("transform", orientationPortrait ? `translate(0, ${toolbarTranslate}px)` : `translate(${toolbarTranslate}px, 0)`)
}

function toolbarOnTouchStart(event) {
	const position = getPosition(event)
	toolbarPositionPointer = (orientationPortrait ? position.pageY : position.pageX) - toolbarTranslate
	toolbarTranslateMax = (orientationPortrait ? -lastButton.getBoundingClientRect().top : -lastButton.getBoundingClientRect().left) + toolbarTranslate
}

function toolbarOnTouchMove(event) {
	if (toolbarPositionPointer != null && (event.buttons === undefined || event.buttons == 1)) {
		const position = getPosition(event)
		const lastToolbarTranslate = toolbarTranslate
		let newToolbarTranslate = (orientationPortrait ? position.pageY : position.pageX) - toolbarPositionPointer
		if (newToolbarTranslate > 0) {
			newToolbarTranslate = 0
		}
		if (newToolbarTranslate < toolbarTranslateMax) {
			newToolbarTranslate = toolbarTranslateMax
		}
		if (Math.abs(lastToolbarTranslate - newToolbarTranslate) > (toolbarMoving ? 1 : 8)) {
			toolbarTranslate = newToolbarTranslate
			const newTransform = orientationPortrait ? `translate(0px, ${toolbarTranslate}px)` : `translate(${toolbarTranslate}px, 0px)`
			toolbarMoving = true
			toolbarElement.style.setProperty("transform", newTransform)
			editorElement.style.setProperty("pointer-events", "none")
			event.preventDefault()
		}
	}
}

function toolbarOnTouchEnd(event) {
	if (toolbarMoving) {
		editorElement.style.removeProperty("pointer-events")
		event.preventDefault()
		event.stopPropagation()
	}
	toolbarPositionPointer = null
	toolbarMoving = false
}

let updatedResources = {}

addEventListener("resize", viewportSizeChange)

addEventListener("load", () => {
	browser.runtime.sendMessage({ method: "editor.getTabData" })
})

addEventListener("beforeunload", (event) => {
	if (tabData.options.warnUnsavedPage && !tabData.docSaved) {
		event.preventDefault()
		event.returnValue = ""
	}
})

function getPageDataResource(resource, prefixPath = "", pageData) {
	const filename = resource.filename.substring(prefixPath.length)
	resource.name = filename
	if (filename.startsWith("frames/")) {
		const framesIndex = Number(filename.match(/^frames\/(\d+)\//)[1])
		const framePath = "frames/" + framesIndex + "/"
		if (!pageData.resources.frames[framesIndex]) {
			pageData.resources.frames[framesIndex] = Object.assign(JSON.parse(JSON.stringify(EMPTY_PAGE_DATA)), {
				name: framePath,
				prefixPath: prefixPath + framePath
			})
		}
		return getPageDataResource(resource, prefixPath + framePath, pageData.resources.frames[framesIndex])
	} else {
		return pageData
	}
}

function deserializeShadowRoots(node) {
	node.querySelectorAll(`template[${SHADOWROOT_ATTRIBUTE_NAME}]`).forEach((element) => {
		if (element.parentElement) {
			let shadowRoot
			try {
				shadowRoot = element.parentElement.attachShadow({ mode: "open" })
				const contentDocument = new DOMParser().parseFromString(element.innerHTML, "text/html")
				Array.from(contentDocument.head.childNodes).forEach((node) => shadowRoot.appendChild(node))
				Array.from(contentDocument.body.childNodes).forEach((node) => shadowRoot.appendChild(node))
			} catch (error) {
				// ignored
			}
			if (shadowRoot) {
				deserializeShadowRoots(shadowRoot)
				element.remove()
			}
		}
	})
}
