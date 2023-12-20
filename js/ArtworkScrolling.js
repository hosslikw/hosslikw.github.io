document.addEventListener('DOMContentLoaded', function() {
    // Check if an element with the class 'sticky-container' exists on the page
    var stickyContainer = document.querySelector('.sticky-container');

    if (stickyContainer) {
        var rowscroll = document.querySelector('.rowscroll');
        var topBarHeight = 84; // Adjust as per the height of your top bar

        function checkstickyContainerPosition() {
            var stickyContainerTop = stickyContainer.getBoundingClientRect().top;

            if (stickyContainerTop <= topBarHeight) {
                // sticky container has reached the top bar, make its content scrollable
                rowscroll.style.overflowY = 'auto';
                rowscroll.style.maxHeight = 'calc(100vh - ' + topBarHeight + 'px)';
            } else {
                // sticky container is below the top bar, make its content not scrollable
                rowscroll.style.overflowY = 'hidden';
                rowscroll.style.maxHeight = 'none';
            }
        }

        // Attach the function to the scroll event of the window
        window.addEventListener('scroll', checkstickyContainerPosition);

        // Initial check on page load
        checkstickyContainerPosition();
    } else {
        console.log('.sticky-container class not found on this page.');
    }
});


// $("#Navstack").on("mouseenter", function () {
// 	let work = $(this)[0].classList[1];
// 	$("." + work).css("text-decoration", "line-through");
// 	let first = "." + work + ":eq(0)";
// 	let second = "." + work + ":eq(1)";
// 	if ($(second).length > 0) {
// 		$(second).animate({ opacity: 0.0, "margin-left": "-100px" }, 800, setInvisible);
// 		$(second).animate({ opacity: 1.0, "margin-left": "0px" }, 10, setVisible);
// 		function setInvisible() {
// 			$(this).css("visibility", "hidden");
// 		}
// 		function setVisible() {
// 			$(this).css("visibility", "visible");
// 		}
// 	}
// });

// Retrieve the second class of the 'Navstack' element
// $("#Navstack > li").on("mouseenter", function() {
//     let work = $(this).attr('class');
//     console.log("Working with class:", work);

//     // Apply line-through decoration to elements with the 'work' class in NavstackVerbose
//     $("#NavstackVerbose ." + work).css("text-decoration", "line-through");

//     // Check if the second element exists in NavstackVerbose and apply animations
//     let second = "#NavstackVerbose ." + work;
//     if ($(second).length > 0) {
//         console.log("Animating element:", second);
//         $(second).animate({ opacity: 0.0, "margin-left": "-100px" }, 800, setInvisible);
//         $(second).delay(800).animate({ opacity: 1.0, "margin-left": "0px" }, 800, setVisible);
//     }
//     // Function to set visibility to hidden
//     function setInvisible() {
//         console.log("Setting invisible");
//         $(this).css("visibility", "hidden");
//     }
//     // Function to set visibility to visible
//     function setVisible() {
//         console.log("Setting visible");
//         $(this).css("visibility", "visible");
//     }
// });
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
