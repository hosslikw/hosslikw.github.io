// Add a click event listener to each button element in the DOM
$(".modal-button").on("click", function () {
  // Get the ID of the clicked button
  const buttonId = $(this).attr("id")

  // Remove any existing classes from the container element
  // and add the corresponding class based on the button ID
  $(".modal-container").removeClass().addClass(buttonId)

  // Add the modal-active class to the body element
  $("body").addClass("modal-active")
})

// Add a click event listener to the container element
$(".modal-container").on("click", function (event) {
  // Prevent the default behavior of the click event
  event.preventDefault()

  // Check if the clicked element is not the container element itself
  if (!$(event.target).is(".modal-container")) {
    return
  }

  // Remove the out class from the container element
  // and remove the modal-active class from the body element
  $(this).removeClass("out")
  $("body").removeClass("modal-active")
})
