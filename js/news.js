(function () {
	const CLASSES = {
		NEWS: ".news",
		BLOG: ".blog",
		POPOVER: ".article-popover",
		NEWS_PREVIEW: ".preview",
		BODYLOCK: "_lock-scroll",
		POPOVER_CLOSE: ".article-popover .close",
		POPOVER_OPEN: "_open",
		MASK: ".mask",
	}

	// Реализуем появление поповера
	const articles = document.querySelector(CLASSES.NEWS) || document.querySelector(CLASSES.BLOG)
	const articlePopover = document.querySelector(CLASSES.POPOVER);
	const HTMLElement = document.documentElement

	articles.addEventListener("click", (e) => {
		const article = e.target.closest(CLASSES.NEWS_PREVIEW)

		if (article) {
			HTMLElement.classList.add(CLASSES.BODYLOCK)
			articlePopover.classList.add(CLASSES.POPOVER_OPEN)
			setBlogContent(article)

			const isNews = articles.classList.contains("news")
			if (isNews) {
				setNewsContent(article)
			}
		}
	})

	document.addEventListener("click", (e) => {
		const mask = e.target.closest(CLASSES.MASK)
		const close = e.target.closest(CLASSES.POPOVER_CLOSE)

		if (mask || close) {
			document.documentElement.classList.remove(CLASSES.BODYLOCK)
			articlePopover.classList.remove(CLASSES.POPOVER_OPEN)
		}
	})

	// Наполняем поповер контентом
	function setBlogContent(article) {
		const articleWrapper = article.parentNode
		const articleTitle = articleWrapper.querySelector(".item-title")
		const articleDate = articleWrapper.querySelector(".item-date")
		// const articleText = articleWrapper.querySelector(".preview-text")

		const popoverTitle = articlePopover.querySelector(".title")
		const popoverDate = articlePopover.querySelector(".date")
		// const popoverText = articlePopover.querySelector(".text")

		popoverTitle.innerText = articleTitle.innerText
		popoverDate.innerText = articleDate.innerText
	}

	function setNewsContent(article) {
		const articleWrapper = article.parentNode

		const articleTitle = articleWrapper.querySelector(".item-title")
		const articleDate = articleWrapper.querySelector(".item-date")
		const articleImage = articleWrapper.querySelector(".preview-bg")

		const popoverTitle = articlePopover.querySelector(".title")
		const popoverDate = articlePopover.querySelector(".date")
		const popoverImage = articlePopover.querySelector(".image img")

		popoverTitle.innerText = articleTitle.innerText
		popoverDate.innerText = articleDate.innerText
		popoverImage.src = articleImage.src
	}
}())