
  $(document).ready(function () {
    const $modalButtons = $(".modal-button");
    const $modalContainer = $("#my-modal");
    const $body = $("body");
    const $collapseButton = $(".modal-close");

    $modalButtons.on("click", function (event) {
      event.preventDefault();
      $modalContainer.addClass("modal-active");
      $body.addClass("modal-active");
    });

    $collapseButton.on("click", function (event) {
      event.preventDefault();
      $modalContainer.removeClass("modal-active");
      $body.removeClass("modal-active");
    });

    $modalContainer.on("click", function (event) {
      if ($(event.target).is($modalContainer)) {
        $modalContainer.removeClass("modal-active");
        $body.removeClass("modal-active");
      }
    });
  });