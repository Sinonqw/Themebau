document.addEventListener('DOMContentLoaded', function () {
	fetch('/header-v2.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('menu').insertAdjacentHTML('afterbegin', data)
			// Код, зависящий от загруженных элементов
			const headerBtn = document.querySelector('.header__btn')
			const menu = document.querySelector('.header__menu')
			const closeMenuBtn = document.querySelector('.close-btn')
			const overlay = document.querySelector('.overlay')

			if (headerBtn && menu && closeMenuBtn && overlay) {
				headerBtn.addEventListener('click', () => {
					menu.style.transform = 'translateX(0)'
					overlay.style.display = 'block'
				})

				closeMenuBtn.addEventListener('click', e => {
					e.preventDefault()
					overlay.style.display = 'none'
					menu.style.transform = 'translateX(100%)'
				})
			} else {
				console.error('Не удается найти элементы в DOM')
			}
		})
		.catch(error => console.error('Ошибка загрузки header-v2.html:', error))
})
