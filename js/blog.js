document.addEventListener('DOMContentLoaded', () => {
	// Навигационное меню
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
	////////////////////////////////////// 
	const filterBox = document.querySelector('.blog__nav')
	const blogItems = document.querySelectorAll('.blog-item')

	filterBox.addEventListener('click', e => {
		e.preventDefault()
		if (e.target.classList.contains('blog__filter-btn')) {
			document.querySelectorAll('.blog__filter-btn').forEach(btn => {
				btn.classList.remove('active')
			})
			e.target.classList.add('active')

			const filterValue = e.target.getAttribute('data-target-name')

			blogItems.forEach(item => {
				if (
					filterValue === 'all' ||
					item.getAttribute('data-target') === filterValue
				) {
					item.style.display = 'flex'
				} else {
					item.style.display = 'none'
				}
			})
		}
	})
})
