$(document).ready(function () {
    function toggleSidebar() {
        $("#hamburger-btn").toggleClass("active");
        $(".popout-Nav").toggleClass("active");
    }

    $("#hamburger-btn").on("click tap", function () {
        toggleSidebar();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });
});