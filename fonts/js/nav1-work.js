
//Animates the list of artworks on the works navigation page. 
$(document).ready(function() {
    $("#Navstack > li").on("mouseenter", function() {
        let workClass = $(this).attr('class');
        console.log("Working with class:", workClass);

        // Apply line-through decoration to elements with the corresponding class in NavstackVerbose
        $("#NavstackVerbose ." + workClass).css("text-decoration", "line-through");

        // Target the corresponding 'li' in NavstackVerbose and apply animations
        let targetElement = "#NavstackVerbose ." + workClass;
        if ($(targetElement).length > 0) {
            console.log("Animating element:", targetElement);
            $(targetElement).animate({ opacity: 0.0, "margin-left": "-100px" }, 800, function() {
                // Set visibility to hidden after animation completes
                $(this).css("visibility", "hidden");
            });
            $(targetElement).delay(800).animate({ opacity: 1.0, "margin-left": "0px" }, 800, function() {
                // Set visibility to visible after animation completes
                $(this).css("visibility", "visible");
            });
        }
    });
});
/**
 * Adjusts the height of certain elements on the page based on the
 * window height and other factors.
 */
// let computeDocHeight = function () {
// 	if (document.getElementById("ClickEnlargePhoto").style.visibility == "visible") {
// 		showLargeImagePanel($("#largeImg").attr("src"));
// 	}
// 	let h = $(window).height();
// 	let hdrHeight = $("#Home_link").height();
// 	$("#left2").css("height", h - hdrHeight - 50);

// 	if ($(".video").length != 0) {
// 		let width = $("#middle").width();
// 		$(".video").css("width", width);
// 		$(".video").css("height", width * 0.5625);
// 	}

// 	if ($(".video2").length != 0) {
// 		let width = $("#middle").width() / 3;
// 		$(".video2").css("width", width);
// 		$(".video2").css("height", width * 0.5625);
// 	}
// };


