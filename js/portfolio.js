
const filter = document.querySelector('.filter__btn-box')
const items = document.querySelectorAll('.projects__item')

filter.addEventListener('click', e => {
	if (e.target.classList.contains('filter__btn')) {
		// Удаляем класс 'active' у всех кнопок
		document.querySelectorAll('.filter__btn').forEach(btn => {
			btn.classList.remove('active')
		})

		// Добавляем класс 'active' к нажатой кнопке
		e.target.classList.add('active')

		const filterValue = e.target.getAttribute('data-set')

		items.forEach(item => {
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
