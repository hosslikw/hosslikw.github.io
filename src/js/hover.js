// mouse-cursor-gradient-tracking
// causes a halo-esque glow to appear around the mouse as it passes over elements given the "mouse-cursor-gradient-tracking" class.
const btn = document.querySelector(".mouse-cursor-gradient-tracking")

btn.onmousemove = (e) => {
  const x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
  const y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
  btn.style.setProperty("--x", `${x}px`)
  btn.style.setProperty("--y", `${y}px`)
}
