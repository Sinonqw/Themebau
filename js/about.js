document.addEventListener('DOMContentLoaded', () => {
	// Навигационное меню
	const headerBtn = document.querySelector('.header__btn')
	const menu = document.querySelector('.header__menu')
	const closeMenuBtn = document.querySelector('.close-btn')
	const overlay = document.querySelector('.overlay')

	headerBtn.addEventListener('click', () => {
		menu.style.transform = 'translateX(0)'
		overlay.style.display = 'block'
	})

	closeMenuBtn.addEventListener('click', e => {
		e.preventDefault()
		overlay.style.display = 'none'
		menu.style.transform = 'translateX(100%)'
	})

	// Слайдер отзывов
	const slides = document.querySelectorAll('.reviews__slide')
	const slidesContainer = document.querySelector('.reviews__slides')
	const prevBtn = document.querySelector('.arrow-left')
	const nextBtn = document.querySelector('.arrow-right')

	let isAnimating = false
	let currentSlide = 1
	const slideWidth = slides[0].clientWidth

	const firstSlide = slides[0].cloneNode(true)
	const lastSlide = slides[slides.length - 1].cloneNode(true)

	slidesContainer.appendChild(firstSlide)
	slidesContainer.insertBefore(lastSlide, slides[0])

	const updatedSlides = document.querySelectorAll('.reviews__slide')
	const totalSlides = updatedSlides.length

	slidesContainer.style.transform = `translateX(-${
		currentSlide * slideWidth
	}px)`

	const moveSlider = () => {
		slidesContainer.style.transition = '.75s ease'
		slidesContainer.style.transform = `translateX(-${
			currentSlide * slideWidth
		}px)`
		setTimeout(() => {
			isAnimating = false
			if (currentSlide === totalSlides - 1) {
				currentSlide = 1
				slidesContainer.style.transition = 'none'
				slidesContainer.style.transform = `translateX(-${
					currentSlide * slideWidth
				}px)`
			}
			if (currentSlide === 0) {
				currentSlide = totalSlides - 2
				slidesContainer.style.transition = 'none'
				slidesContainer.style.transform = `translateX(-${
					currentSlide * slideWidth
				}px)`
			}
		}, 750)
	}

	const nextSlide = () => {
		if (isAnimating) return
		isAnimating = true
		currentSlide++
		moveSlider()
	}

	const prevSlide = () => {
		if (isAnimating) return
		isAnimating = true
		currentSlide--
		moveSlider()
	}

	nextBtn.addEventListener('click', nextSlide)
	prevBtn.addEventListener('click', prevSlide)

	// Слайдер команды
const teamContainer = document.querySelector('.team__list')
const teamSlides = document.querySelectorAll('.team__group')
const paginationContainer = document.querySelector('.pagination')

let currentSlideIndex = 1 // Начинаем с 1, так как 0 будет клонированным последним слайдом
const paginationCircles = []

// Клонирование первого и последнего слайдов для бесконечного перехода
const teamFirstSlide = teamSlides[0].cloneNode(true)
const teamLastSlide = teamSlides[teamSlides.length - 1].cloneNode(true)
teamContainer.appendChild(teamFirstSlide)
teamContainer.insertBefore(teamLastSlide, teamSlides[0])

// Обновляем массив слайдов
const allSlides = document.querySelectorAll('.team__group')

function showSlide(index) {
	const screenWidth = window.innerWidth
	let offset = index * 102.7

	if (screenWidth <= 1200) {
		offset = index * 100 // Для экранов шириной 1200px и менее
	}
	if (screenWidth <= 610) {
		offset = index * 100 // Для экранов шириной 610px и менее, также используем 100% ширины
	}

	teamContainer.style.transition = 'transform 0.75s ease'
	teamContainer.style.transform = `translateX(-${offset}%)`
	updatePagination(index)
}

function updatePagination(index) {
	paginationCircles.forEach((circle, i) => {
		if (index === 0 && i === paginationCircles.length - 1) {
			circle.classList.add('active')
		} else if (index === allSlides.length - 1 && i === 0) {
			circle.classList.add('active')
		} else {
			circle.classList.toggle('active', i === index - 1)
		}
	})
}

function createPagination() {
	const div = document.createElement('div')
	div.className = 'pag-line'
	paginationContainer.appendChild(div)
	paginationCircles.push(div)
}

function addPagination() {
	for (let i = 0; i < teamSlides.length; i++) {
		createPagination()
	}
	paginationCircles[0].classList.add('active')
}

function teamNextSlide() {
	currentSlideIndex++
	const screenWidth = window.innerWidth
	let offset = currentSlideIndex * 102.7

	if (screenWidth <= 1200) {
		offset = currentSlideIndex * 102.7 // Для экранов шириной 1200px и менее
	}
	if (screenWidth <= 610) {
		offset = currentSlideIndex * 102.7 // Для экранов шириной 610px и менее
	}

	showSlide(currentSlideIndex)

	if (currentSlideIndex >= allSlides.length - 1) {
		setTimeout(() => {
			teamContainer.style.transition = 'none'
			currentSlideIndex = 1
			teamContainer.style.transform = `translateX(-${currentSlideIndex * 102.7}%)` // Устанавливаем правильное смещение
			setTimeout(() => {
				teamContainer.style.transition = 'transform 0.75s ease'
				showSlide(currentSlideIndex) // Добавляем вызов showSlide для корректного переключения
			}, 50)
		}, 750) // Пауза равна времени анимации перехода
	}
}

addPagination()
showSlide(currentSlideIndex) // Показать первый слайд сразу после загрузки страницы
setInterval(teamNextSlide, 3000)

// Обновление слайдов при изменении размера окна
window.addEventListener('resize', () => {
	showSlide(currentSlideIndex)
})
});






