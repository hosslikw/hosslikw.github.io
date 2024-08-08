// Cache video elements
const videos = document.querySelectorAll("video")

// Add source to video tag
const addSourceToVideo = (element, src) => {
  const source = document.createElement("source")
  source.src = src
  source.type = "video/mp4"
  console.log(src)
  element.appendChild(source)
}

// Determine screen size and select mobile or desktop video
const whichSizeVideo = (element, src) => {
  const windowWidth = window.innerWidth || $(window).innerWidth()
  if (windowWidth > 1200) {
    addSourceToVideo(element, src.dataset.desktopVid)
  } else {
    addSourceToVideo(element, src.dataset.mobileVid)
  }
}

// Initialize only if page has videos
const videoSize = () => {
  if (videos) {
    videos.forEach((element) => {
      whichSizeVideo(element, element)
    })
  }
}
videoSize()

// Get the iOS button and the play film button
const iosButton = document.getElementById("ios-button")
const playFilmButton = document.getElementById("play-film-button")

// Check if the user agent is an iOS device
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

// If the device is not iOS, hide the iOS button and show the play film button
if (!isIOS) {
  iosButton.style.display = "none"
  playFilmButton.style.display = "block"
} else {
  iosButton.style.display = "block"
  playFilmButton.style.display = "none"

  // Deactivate the span functionality on iOS by removing the onclick attribute and id attribute
  const spanElement = document.getElementById("play-video")
  spanElement.removeAttribute("onclick")
  spanElement.removeAttribute("id")
}

// Play film button starts playing the video on mobile
const playMobileVideo = () => {
  const video = document.getElementById("video-mobile")
  video.play()
}

// Display the logs for a short delay before redirecting
setTimeout(() => {
  console.clear() // Optional: Clear the console before redirection
  window.location.href = targetPage
}, 0) // Adjust the delay time (in milliseconds) as needed

// Play and pause video when opening + closing modal window
document.querySelector("#play-video").addEventListener("click", () => {
  document.querySelector("#video-dialogue-content").play()
})

document.querySelector("#pause-video").addEventListener("click", () => {
  document.querySelector("#video-dialogue-content").pause()
})
