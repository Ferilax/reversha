(function () {
	const search = document.querySelector(".component_search")
	const input = search.querySelector("input")
	const menu = search.querySelector(".menu")

	const values = [
		"Молочные экзосомы Реверша",
		"Клинические иследования препарата Реверша",
		"Чем полезны экзосомы Реверша",
		"Анна Иванова про пользу экзосом Реверша",
		"Анна Иванова и Людмила Людина про свой опыт работы с Реверша",
	]

	function searchMatches(inputText, items) {
		if (!inputText || inputText.trim() === "") {
			return [];
		}

		const searchTerms = inputText.toLowerCase().trim().split(/\s+/);

		return items.filter(item => {
			const lowerItem = item.toLowerCase();
			return searchTerms.every(term => lowerItem.includes(term));
		});
	}

	function createOptions(options) {
		menu.innerHTML = ""

		if (options.length === 0) {
			const element = document.createElement("div")
			element.classList.add("not-found")
			element.innerText = "Результатов не найдено"
			menu.appendChild(element)
		}

		options.map(option => {
			const optionElement = document.createElement("a")
			optionElement.classList.add("option")
			optionElement.innerText = option
			menu.appendChild(optionElement)
		})
	}

	input.addEventListener("input", (e) => {
		const searched = searchMatches(e.target.value, values)
		createOptions(searched)
	})

	menu.addEventListener("mousedown", (e) => {
		const option = e.target.closest(".option")

		if (option) {
			input.value = option.innerText
		}
	})
}())