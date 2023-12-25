//Scollbar 
document.addEventListener('DOMContentLoaded', function() {
    // check if an element with the class 'sticky-container' exists on the page
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
