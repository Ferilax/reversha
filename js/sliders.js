import "./libs/splide.min.js"
import { showFullComment } from "./comments.js"

(function () {
	Splide.defaults = {
		pagination: false,
		arrows: false,
	}

	function createSwiper(swiperSelector, options) {
		const hasSwiper = !!document.querySelector(swiperSelector);
		if (hasSwiper) {
			let splide = new Splide(swiperSelector, options);
			splide.mount();

			return splide;
		}
	}

	createSwiper("#start-splide", {
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 20,

		breakpoints: {
			767: {
				gap: 16,
			}
		}
	})

	createSwiper("#science-splide", {
		arrows: true,
		omitEnd: true,

		focus: 0,
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 20,
	})

	const commentsSplide = createSwiper("#comments-splide", {
		arrows: true,
		omitEnd: true,

		focus: 0,
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 20,

		breakpoints: {
			1023: {
				autoHeight: true
			},
			767: {
				gap: 16,
			}
		}
	})

	const otherPostsSplide = createSwiper("#other-posts-splide", {
		omitEnd: true,

		focus: 0,
		padding: 40,
		fixedWidth: 587,
		gap: 20,
	})

	// -----------------------------------------------------------------------------

	showFullComment(() => {
		commentsSplide.refresh()
	})
}())
