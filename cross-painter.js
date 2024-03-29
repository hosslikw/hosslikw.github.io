//paint-js/cross-painter.js
class CrossPainter {
	static get inputProperties() {
		return ["--border-thin", "--color-dark"]
	}
	paint(ctx, size, properties) {
		ctx.lineWidth = properties.get("--border-thin").value
		ctx.strokeStyle = properties.get("--color-dark").toString()
		ctx.beginPath()
		ctx.moveTo(0, 0)
		ctx.lineTo(size.width, size.height)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(size.width, 0)
		ctx.lineTo(0, size.height)
		ctx.stroke()
	}
}
registerPaint("image-cross", CrossPainter)
