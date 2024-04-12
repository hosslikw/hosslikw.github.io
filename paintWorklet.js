if ("paintWorklet" in CSS) {
	CSS.paintWorklet.addModule("cross-painter.js");
} else {
	console.log("Paint Worklet is not supported by this browser.");
}
