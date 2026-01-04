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

	createSwiper("#other-posts-splide", {
		omitEnd: true,

		focus: 0,
		padding: 40,
		fixedWidth: 587,
		gap: 20,
	})

	createSwiper("#milk-exosomes-splide", {
		padding: "calc((100vw - 100%) / 2)",
		perPage: 3,
		gap: 27,

		breakpoints: {
			1439: {
				perPage: 2,
			},
			1023: {
				gap: 16,
			},
			767: {
				omitEnd: true,
				focus: 0,
				fixedWidth: 500,
			},
			599: {
				fixedWidth: 400
			},
			499: {
				fixedWidth: 300
			},
		}
	})

	createSwiper("#technology-splide", {
		perPage: 1
	})

	createSwiper("#effect-slide", {
		padding: "calc((100vw - 100%) / 2)",
		perPage: 3,
		gap: 20,

		breakpoints: {
			1200: {
				fixedWidth: 400,
				omitEnd: true,
				focus: 0,
			},
			1023: {
				gap: 12
			},
			767: {
				fixedWidth: 300,
			},
		}
	})

	createSwiper("#other-section-splide", {
		padding: "calc((100vw - 100%) / 2)",

		omitEnd: true,
		focus: 0,
		fixedWidth: 587,
		gap: 20,

		breakpoints: {
			1439: {
				fixedWidth: 500,
			},
			1023: {
				fixedWidth: 400,
				gap: 12,
			},
			767: {
				fixedWidth: 300,
			},
		}
	})
	// -----------------------------------------------------------------------------

	showFullComment(() => {
		commentsSplide.refresh()
	})
}())
