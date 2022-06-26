
export const spoiler = () => {


	const spoilers = document.querySelectorAll('.spoiler')

	if (window.screen.width < 768) {
		document.querySelector('.footer').addEventListener('click', (e) => {


			if (e.target.closest('.spoiler')) {
				if (!e.target.closest('.spoiler').classList.contains('spoiler-hidden')) {
					spoilers.forEach((item) => {
						item.classList.add('spoiler-hidden')
					})
				} else {
					spoilers.forEach((item) => {
						item.classList.add('spoiler-hidden')
					})
					e.target.closest('.spoiler').classList.remove('spoiler-hidden')
				}

			}

		})
	}

}