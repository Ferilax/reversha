import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.26/+esm"

(function () {
	const wheelSection = document.querySelector(".wheel-section")
	const wheel = wheelSection.querySelector(".wheel")

	let rotates = 0

	wheelSection.addEventListener("click", () => {
		animate(
			wheel,
			{ rotate: -90 * rotates },
			{ type: "spring", stiffness: 200, damping: 30, mass: 2 }
		)

		if (rotates === 2) {
			rotates = 0
		} else {
			rotates++
		}
	})
}())