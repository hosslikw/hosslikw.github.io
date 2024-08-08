// main.js
import { imgUrl, getImageUrl } from "./images.js"
import initializeModal from "./modal.js"

document.addEventListener("DOMContentLoaded", () => {
  const heroImageElement = document.getElementById("hero-img")
  if (heroImageElement) {
    heroImageElement.src = imgUrl
  }

  const otherImageElement = document.getElementById("other-img")
  if (otherImageElement) {
    otherImageElement.src = getImageUrl("example")
  }

  // Initialize modal functionality
  initializeModal()
})
