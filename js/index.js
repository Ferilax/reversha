async function loadModules() {
	import("./header.js")
	import("./popover.js")

	if (document.querySelector(".splide")) {
		import("./sliders.js")
	}

	if (document.querySelector(".wheel-section")) {
		import("./wheel.js")
	}

	if (document.querySelector(".tab-system")) {
		import("./tabs.js")
	}
	if (document.querySelector(".article-popover")) {
		import("./news.js")
	}

	if (document.querySelector(".accordion")) {
		import("./accordion.js")
	}
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", loadModules);