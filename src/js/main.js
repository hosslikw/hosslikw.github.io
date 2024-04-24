// main.js
import { imgUrl, getImageUrl } from "./images.js"

document.addEventListener("DOMContentLoaded", () => {
  const heroImageElement = document.getElementById("hero-img")
  if (heroImageElement) {
    heroImageElement.src = imgUrl
  }

  // Example of dynamically setting an image
  const otherImageElement = document.getElementById("other-img")
  if (otherImageElement) {
    otherImageElement.src = getImageUrl("example")
  }
})
// Import the imgUrl and getImageUrl functions from the images.js module
import { imgUrl, getImageUrl } from "./images.js"

// Add an event listener to the DOMContentLoaded event of the document object
document.addEventListener("DOMContentLoaded", () => {
  // Get the HTML element with the id of "hero-img"
  const heroImageElement = document.getElementById("hero-img")

  // Check if the heroImageElement exists
  if (heroImageElement) {
    // Set the src attribute of the heroImageElement to the value of imgUrl
    heroImageElement.src = imgUrl
  }

  // Get the HTML element with the id of "other-img"
  const otherImageElement = document.getElementById("other-img")

  // Check if the otherImageElement exists
  if (otherImageElement) {
    // Set the src attribute of the otherImageElement to the value returned by the getImageUrl function with the argument "example"
    otherImageElement.src = getImageUrl("example")
  }
})