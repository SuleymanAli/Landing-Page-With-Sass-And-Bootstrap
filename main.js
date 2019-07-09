/* Image Slider */

$(document).ready(function() {
	// Variables

	let carousels = $(".slide-wrapper"),
	inner = $(".inner-wrapper"),
	slide = $(".inner-wrapper .slide"),
	next = $(".next"),
	prev = $(".prev"),
	bubblesContainer = $(".bubbles"),
	imgs = $(".inner-wrapper img"),
	currentImageIndex = 1,
	bubbles = [];

	// Slide And Image Width

	inner.css("width", inner.children().length * 100 + "%");
	inner.children().css("width", 100 / inner.children().length + "%");

	// Indicators

	for (let i = 0; i < imgs.length; i++) {
		let b = $("<span></span>");
		b.addClass("bubble");
		bubblesContainer.append(b);
		bubbles.push(b);

		b.on("click", function() {
			currentImageIndex = i;
			switchImg();
		});
	}

	// Core Function

	function switchImg() {
		inner.css({
			left: -100 * currentImageIndex + "%",
			transition: "all .8s ease-in-out"
		});
		$.each(bubbles, function(i, b) {
			if (i === currentImageIndex) {
				b.addClass("active");
			} else {
				b.removeClass("active");
			}
		});
	}

	// Click Events

	next.on("click", function() {
		currentImageIndex++;

		if (currentImageIndex >= imgs.length) {
			currentImageIndex = 0;
		}

		switchImg();
	});

	prev.on("click", function() {
		currentImageIndex--;

		if (currentImageIndex < 0) {
			currentImageIndex = imgs.length - 1;
		}

		switchImg();
	});

	switchImg();

	// OnMouse Events

	next
	.mouseenter(function() {
		if (currentImageIndex == imgs.length - 1) return;
		inner.css("left", -100 * currentImageIndex - 10 + "%");
	})
	.mouseleave(function() {
		inner.css("left", -100 * currentImageIndex + "%");
	});

	prev
	.mouseenter(function() {
		if (currentImageIndex == 0) return;
		inner.css("left", -100 * currentImageIndex + 10 + "%");
	})
	.mouseleave(function() {
		inner.css("left", -100 * currentImageIndex + "%");
	});
});

/* Video */

var videoSection = document.querySelector("section.video");
var videoPlay = videoSection.querySelector(".video-play");
var videoPause = videoSection.querySelector(".video-pause");

videos = Array.from(videoSection.querySelectorAll("video"));

for (var i = 0; i < videos.length; i++) {
	var playControl = videos[i].nextElementSibling;

	playControl.addEventListener("click", function(e) {
		if (e.target.matches('.video-play')) {
			video = e.target.offsetParent.previousElementSibling
			var icon = video.paused ? "/img/pause.svg" : "/img/play-button.svg";
			e.target.src = icon;
			video.paused ? video.play() : video.pause();
		}
	});
}
