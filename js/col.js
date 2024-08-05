document.addEventListener('DOMContentLoaded', () => {
	const filter = document.querySelector('.filter__box')
	const items = document.querySelectorAll('.project-item')

	filter.addEventListener('click', e => {
		if (e.target.classList.contains('filter__btn')) {
			document.querySelectorAll('.filter__btn').forEach(btn => {
				btn.classList.remove('active')
			})
			e.target.classList.add('active')

			const filterValue = e.target.getAttribute('data-set')

			items.forEach(item => {
				const targets = item.getAttribute('data-target').split(' ')
				if (filterValue === 'all' || targets.includes(filterValue)) {
					item.style.display = 'flex'
				} else {
					item.style.display = 'none'
				}
			})
		}
	})
})
