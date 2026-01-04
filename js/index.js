async function loadModules() {
	import("./header.js")
	import("./popover.js")

	function has(selector) {
		return !!document.querySelector(selector)
	}

	if (has(".splide")) {
		import("./sliders.js")
	}

	if (has(".wheel-section")) {
		import("./wheel.js")
	}

	if (has(".tab-system")) {
		import("./tabs.js")
	}
	if (has(".article-popover")) {
		import("./news.js")
	}

	if (has(".accordion")) {
		import("./accordion.js")
	}

	if (has(".start-animation")) {
		if (window.innerWidth >= 1024) {
			import("./start-animation.js")
		} else {
			document
				.querySelector(".start-animation")
				.style.display = "none"
		}
	}

	if (has(".component_search")) {
		import("./search.js")
	}
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", loadModules);