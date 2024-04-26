// Cache the modal button and container elements
const $modalButtons = $('.modal-button');
const $modalContainer = $('.modal-container');
const $body = $('body');

// Add a click event listener to each modal button
$modalButtons.on('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Get the ID of the clicked button
  const buttonId = $(this).attr('id');

  // Remove any existing classes from the container element
  // and add the corresponding class based on the button ID
  $modalContainer.removeClass().addClass(`modal-${buttonId}`);

  // Add the modal-active class to the body element
  $body.addClass('modal-active');
});

// Add a click event listener to the container element
$modalContainer.on('click', function(event) {
  event.stopPropagation(); // Stop the event from bubbling up
  // Check if the clicked element is not the container element itself
  if (!$(event.target).is($modalContainer)) {
    return;
  }

  // Remove the out class from the container element
  $modalContainer.removeClass('out');

  // Remove the modal-active class from the body element
  $body.removeClass('modal-active');
});

// Add a click event listener to the document
$(document).on('click', function(event) {
  // Check if the clicked element is not the modal container or its descendants
  if (!$modalContainer.is(event.target) && !$modalContainer.has(event.target).length) {
    // Remove the out class from the container element
    $modalContainer.removeClass('out');

    // Remove the modal-active class from the body element
    $body.removeClass('modal-active');
  }
});