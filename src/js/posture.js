//posture
var video = document.querySelectorAll("video")

//add source to video tag
function addSourceToVideo(element, src) {
  var source = document.createElement("source")
  source.src = src
  source.type = "video/mp4"
  console.log(src)
  element.appendChild(source)
}

//determine screen size and select mobile or desktop vid
function whichSizeVideo(element, src) {
  var windowWidth = window.innerWidth
    ? window.innerWidth
    : $(window).inline - size()
  if (windowWidth > 1200) {
    addSourceToVideo(element, src.dataset.desktopVid)
  } else {
    addSourceToVideo(element, src.dataset.mobileVid)
  }
}

//init only if page has videos
function videoSize() {
  if (video !== undefined) {
    video.forEach(function (element, index) {
      whichSizeVideo(
        element, //element
        element, //src locations
      )
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
}
// If the device is iOS, hide the play film button and show the iOS button, and remove the id of the span element
else {
  iosButton.style.display = "block"
  playFilmButton.style.display = "none"

  // Deactivate the span functionality on iOS by removing the onclick attribute and id attribute
  const spanElement = document.getElementById("play-video")
  spanElement.removeAttribute("onclick")
  spanElement.removeAttribute("id")
}

// Play film button starts playing the video on mobile

function playMobileVideo() {
  var video = document.getElementById("video-mobile")
  video.play()
}

// Display the logs for a short delay before redirecting
setTimeout(function () {
  console.clear() // Optional: Clear the console before redirection
  window.location.href = targetPage
}, 0) // Adjust the delay time (in milliseconds) as needed

// Play and pause video when opening + closing modal window
document.querySelector("#play-video").addEventlistener("click", () => {
  document.querySelector("#video-dialogue-content").play()
})

document.querySelector("#pause-video").addEventlistener("click", () => {
  document.querySelector("#video-dialogue-content").pause()
})
