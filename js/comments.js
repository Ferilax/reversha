import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.26/+esm"

export function showFullComment(callback) {
	const comments = document.querySelector("#comments-splide")

	if (!comments) return

	comments.addEventListener("click", (e) => {
		const button = e.target.closest(".see-full")
		const slide = e.target.closest(".splide__slide")

		if (!button) return

		if (window.innerWidth >= 1024) {
			const animation = animate(slide, { width: 740 })
			animation.then(() => {
				slide.classList.add("_open")
				callback()
			})
		} else {
			slide.classList.add("_open")
		}
	})
}
