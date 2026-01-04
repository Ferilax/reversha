import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.26/+esm"

// 😁

(function () {
	const section = document.querySelector(".start-animation")
	const svg = section.querySelector("svg")
	const ha = svg.querySelector(".ha")
	const firstE = svg.querySelector("._1")
	const secondE = svg.querySelector("._2")

	const step1Duration = 0.6

	document.documentElement.classList.add("_animation")

	const sequence = [
		[firstE, { rotate: 180 }, { at: 0, duration: 0.6 }],
		[secondE, { rotate: 180 }, { at: 0, duration: 0.6 }],
		[ha, { opacity: [0, 1], y: ["-100vh", 0] }, { at: 0, delay: 0.5, duration: 0.8 }],
		[svg, { width: ["203%", "143%", "100%"] }, { at: 0, duration: 1.2 }],
		[svg, { scale: 6, opacity: [1, 0], y: "-100%" }, { at: 0, delay: 1.4, duration: 0.8 }],
		[section, { background: "#E0D8D1" }, { at: 0, delay: 1.4, duration: 0.8 }],
		[section, { opacity: 0, display: "none" }, { at: 0, delay: 1.7, duration: 0.5 }],
	]

	const sequence2 = [
		[svg, { width: "100%" }, { at: 0, duration: 1 }],
		[ha, { opacity: 0.5, y: 300 }, { duration: 4 }],
	]

	const starting = animate(sequence)

	starting.then(() => document.documentElement.classList.remove("_animation"))
}())