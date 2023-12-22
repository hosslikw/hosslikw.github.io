$(document).ready(function () {
	function toggleSidebar() {
		$(".button").toggleClass("active");
		$(".nav-Overflow").toggleClass("move-to-left");
		$(".popout-Item").toggleClass("active");
	}

	$(".button").on("click tap", function () {
		toggleSidebar();
	});

	$(document).keyup(function (e) {
		if (e.keyCode === 27) {
			toggleSidebar();
		}
	});
});
