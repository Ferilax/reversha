(function () {
	const CLASSES = {
		MODIFICATION: "_open",
		CLOSE: ".close",
		BODYLOCK: "_lock-scroll",
	}
	function createPopover(popoverSelector, triggerSelector) {
		const popover = document.querySelector(popoverSelector)
		const trigger = document.querySelector(triggerSelector)
		const HTMLElement = document.documentElement

		if (!popover || !trigger) return

		const closeButton = popover.querySelector(CLASSES.CLOSE)

		// Переключатель появления поповера
		function scrollSwitcher(action) {
			if (action === "lock") {
				HTMLElement.classList.add(CLASSES.BODYLOCK)
				popover.classList.add(CLASSES.MODIFICATION)
				document.addEventListener("click", clickOutsideHandler)
			}

			if (action === "unlock") {
				HTMLElement.classList.remove(CLASSES.BODYLOCK)
				popover.classList.remove(CLASSES.MODIFICATION)
				document.removeEventListener("click", clickOutsideHandler)
			}
		}

		// При открытом поповере вешаем на документ обработчик, для отлавливания кликов вне
		// При закрытии поповера удаляем обработчик
		function clickOutsideHandler(e) {
			const popover = e.target.closest(popoverSelector)
			const close = e.target.closest(triggerSelector)

			if (!popover && !close) {
				scrollSwitcher("unlock")
			}
		}

		trigger.addEventListener("click", () => {
			scrollSwitcher("lock")
		})

		closeButton.addEventListener("click", () => {
			scrollSwitcher("unlock")
		})
	}

	createPopover(".consultation-popover", ".consultation-popover-trigger")
	createPopover(".buy-popover", ".buy-popover-trigger")
	createPopover(".header-popover", ".header-popover-trigger")
}())