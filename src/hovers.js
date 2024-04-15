// mouse-cursor-gradient-tracking
// causes a halo esque glow to appear around the mouse as it passes over elements given the "mouse-cursor-gradient-tracking" class.
var btn = document.querySelector(".mouse-cursor-gradient-tracking");
btn.onmousemove = function (e) {
	var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;
	var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;
	btn.style.setProperty("--x", x + "px");
	btn.style.setProperty("--y", y + "px");
};
