/** @format */

/**
 * Event listener for the click event on the header element of the note.
 * @param {MouseEvent} event - The click event.
 */
;(event) => {
	if (event.target == headerElement) {
		// Collapse the note after a delay.
		collapseNoteTimeout = setTimeout(() => {
			noteElement.classList.toggle("note-collapsed")
			hideMaskNote()
		}, COLLAPSING_NOTE_DELAY)
		event.preventDefault()
		// Get the position of the click event.
		const position = getPosition(event)
		// Get the X and Y coordinates of the click event.
		const clientX = position.clientX
		const clientY = position.clientY
		// Get the bounding client rectangle of the note element.
		const boundingRect = noteElement.getBoundingClientRect()
		// Calculate the difference between the click event and the top-left corner of the note.
		const deltaX = clientX - boundingRect.left
		const deltaY = clientY - boundingRect.top
		// Add the active class to the mask page element.
		maskPageElement.classList.add(PAGE_MASK_ACTIVE_CLASS)
		// Disable text selection.
		document.documentElement.style.setProperty("user-select", "none", "important")
		// Get the anchor element of the container element.
		anchorElement = getAnchorElement(containerElement)
		// Display the mask note element.
		displayMaskNote()
		// Select the note element.
		selectNote(noteElement)
		// Move the note element based on the difference between the click event and the top-left corner.
		moveNote(event, deltaX, deltaY)
		// Set the moving note mode to the event and the difference between the click event and the top-left corner.
		movingNoteMode = {
			event,
			deltaX,
			deltaY
		}
		// Add an event listener for the mousemove event on the document element.
		document.documentElement.ontouchmove = document.documentElement.onmousemove = (event) => {
			// Clear the collapse note timeout.
			clearTimeout(collapseNoteTimeout)
			// Check if the moving note mode is set.
			if (!movingNoteMode) {
				// Set the moving note mode to the difference between the click event and the top-left corner.
				movingNoteMode = {
					deltaX,
					deltaY
				}
			}
			// Set the event of the moving note mode to the current event.
			movingNoteMode.event = event
			// Move the note element based on the difference between the current event and the top-left corner.
			moveNote(event, deltaX, deltaY)
		}
	}
}
