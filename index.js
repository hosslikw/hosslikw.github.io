// import "index.css"

// /**
//  * The showImage function updates the source of an image element, displays a
//  * large image panel, and makes a "Click to Enlarge" button visible.
//  * @param imgName - The parameter "imgName" is a string that represents the name or path of the image
//  * file that you want to display.
//  */
// function showImage(imgName) {
// 	document.getElementById("largeImg").src = imgName
// 	showLargeImagePanel(imgName)
// 	document.getElementById("ClickEnlargePhoto").style.visibility = "visible"
// 	unselectAll()
// }

// function showLargeImagePanel(imgName) {
// 	let imgH, imgW, w2, h2
// 	for (let i = 0; i < $("#middle img.fig").length; ++i) {
// 		let item = $("#middle img.fig:eq(" + i + ")")
// 		if (item.attr("src") == imgName) {
// 			imgH = $(item).height()
// 			imgW = $(item).width()
// 			break
// 		}
// 		let w = $(window).width()
// 		let h = $(window).height()
// 		if (imgH == undefined) {
// 			imgH = h
// 			imgW = w
// 		}
// 		if (imgW > imgH && (w < h || (w > h && w / h < imgW / imgH))) {
// 			h2 = w * (imgH / imgW)
// 			$("#ClickEnlargePhoto").css({ height: h2, width: w, top: (h - h2) / 2, left: 0 })
// 			$("#largeImg").css({ height: h2 - 4, width: w - 4 })
// 		} else {
// 			w2 = h * (imgW / imgH)
// 			$("#ClickEnlargePhoto").css({ width: w2, height: h, left: (w - w2) / 2, top: 0 })
// 			$("#largeImg").css({ width: w2 - 4, height: h - 4 })
// 		}
// 	}

// 	/**
// 	 * Unselects all text and then hides an element.
// 	 */
// 	function unselectAll() {
// 		if (document.selection) document.selection.empty()
// 		if (window.getSelection) window.getSelection().removeAllRanges()
// 	}

// 	function hideMe(obj) {
// 		obj.style.visibility = "hidden"
// 	}

// 	/**
// 	 * Adjusts the height of certain elements on the page based on the window height
// 	 * and other factors.
// 	 */
// 	let computeDocHeight = function () {
// 		if (document.getElementById("ClickEnlargePhoto").style.visibility == "visible") {
// 			showLargeImagePanel($("#largeImg").attr("src"))
// 		}
// 		let h = $(window).height()
// 		let hdrHeight = $("#Home_link").height()
// 		$("#left2").css("height", h - hdrHeight - 50)
// 		if ($(".video").length != 0) {
// 			let width = $("#middle").width()
// 			$(".video").css({ width: width, height: width * 0.5625 })
// 		}
// 		if ($(".video2").length != 0) {
// 			let width = $("#middle").width() / 3
// 			$(".video2").css({ width: width, height: width * 0.5625 })
// 		}
// 	}
// 	$(".Links_ArtworkInitials ").on("mouseenter", function () {
// 		let work = $(this)[0].classList[1]
// 		$("." + work).css("text-decoration", "line-through")
// 		let first = "." + work + ":eq(0)"
// 		let second = "." + work + ":eq(1)"
// 		if ($(second).length > 0) {
// 			$(second).animate({ "opacit  y": 0.0, "margin-left": "-100px" }, 800, setInvisible)
// 			$(second).animate({ "opacity": 1.0, "margin-left": "0px" }, 10, setVisible)
// 		}

// 		function setInvisible() {
// 			$(this).css("visibility", "hidden")
// 		}

// 		function setVisible() {
// 			$(this).css("visibility", "visible")
// 		}
// 	})

// 	$(".Links_ArtworkInitials ").on("mouseleave", function () {
// 		let work = $(this)[0].classList[1]
// 		$("." + work).css("text-decoration", "none")
// 	})

// 	$(document).rea - dy(computeDocHeight)
// 	$(window).resize(computeDocHeight)
// 	document.querySelector(".svg-wrapper").addEventListener("click", function () {
// 		// place animation here
// 	})

// 	/**
// 	 * Takes a string as input and returns a parsed floating-point number by
// 	 * removing the last two characters from the string.
// 	 *@param string*/

// 	// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// 	// Initialization for ES Users
// 	import { Collapse, Ripple, initTE } from "tw-elements"

// 	initTE({ Collapse, Ripple })
