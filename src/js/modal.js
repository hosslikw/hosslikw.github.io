// Cache the modal button and container elements
const $modalButtons = $('.modal-button');
const $modalContainer = $('.modal-container');
const $body = $('body');

// Add a click event listener to each modal button
$modalButtons.on('click', function() {
  // Get the ID of the clicked button
  const buttonId = $(this).attr('id');

  // Remove any existing classes from the container element
  // and add the corresponding class based on the button ID
  $modalContainer.removeClass().addClass(buttonId);

  // Add the modal-active class to the body element
  $body.addClass('modal-active');
});

// Add a click event listener to the container element
$modalContainer.on('click', function(event) {
  // Prevent the default behavior of the click event
  event.preventDefault();

  // Check if the clicked element is not the container element itself
  if (!$(event.target).is($modalContainer)) {
    return;
  }

  // Remove the out class from the container element
  // and remove the modal-active class from the body element
  $modalContainer.removeClass('out');
  $body.removeClass('modal-active');
});