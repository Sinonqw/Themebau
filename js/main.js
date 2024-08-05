
const sliderLine = document.querySelector('.slider-line')
const nextBtn = document.querySelector('.slide__btn-next')
const prevBtn = document.querySelector('.slide__btn-prev')
const slides = document.querySelectorAll('.header__slide')

let position = 1
let isAnimating = false

const firstSlideClone = slides[0].cloneNode(true)
const lastSlideClone = slides[slides.length - 1].cloneNode(true)

sliderLine.appendChild(firstSlideClone)
sliderLine.insertBefore(lastSlideClone, slides[0])

const updatedSlides = document.querySelectorAll('.header__slide')
const totalSlides = updatedSlides.length

const slideWidth = slides[0].clientWidth

const moveSlider = () => {
	sliderLine.style.transition = 'transform 0.75s'
	sliderLine.style.transform = `translateX(-${position * slideWidth}px)`
	setTimeout(() => {
		isAnimating = false
	}, 750)
}

const nextSlide = () => {
	if (isAnimating) return
	isAnimating = true

	if (position < totalSlides - 1) {
		position++
	} else {
		position = 1
		sliderLine.style.transition = 'none'
		sliderLine.style.transform = `translateX(-${position * slideWidth}px)`
		setTimeout(() => {
			position++
			sliderLine.style.transition = 'transform 0.75s'
			moveSlider()
		}, 20)
		return
	}
	moveSlider()
}

const prevSlide = () => {
	if (isAnimating) return
	isAnimating = true

	if (position > 0) {
		position--
	} else {
		position = totalSlides - 2
		sliderLine.style.transition = 'none'
		sliderLine.style.transform = `translateX(-${position * slideWidth}px)`
		setTimeout(() => {
			position--
			sliderLine.style.transition = 'transform 0.75s'
			moveSlider()
		}, 20)
		return
	}
	moveSlider()
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

window.addEventListener('load', () => {
	sliderLine.style.transform = `translateX(-${slideWidth}px)`
})

/////////// VALUES SLIDER
const pointsContainer = document.querySelector('.values__pag')
const valuesSlides = document.querySelectorAll('.values-slide')
const slidersContainer = document.querySelector('.values__sliders')

let slideCount = valuesSlides.length
let slidesPerGroup = getSlidesPerGroup(window.innerWidth)
let totalGroups = Math.ceil(slideCount / slidesPerGroup)
let currentIndex = slidesPerGroup // Начальный индекс с учетом клонированных слайдов

function getSlidesPerGroup(width) {
	if (width <= 1000) {
		return 1
	} else if (width <= 1114) {
		return 2
	} else {
		return 3
	}
}

function createPagination() {
	pointsContainer.innerHTML = ''
	for (let i = 0; i < totalGroups; i++) {
		const point = document.createElement('div')
		point.classList.add('values-pagination')
		if (i === 0) {
			point.classList.add('values-pagination-active')
		}
		pointsContainer.appendChild(point)
	}
}

function cloneSlides() {
	slidersContainer.innerHTML = ''

	// Клонирование последних слайдов в начало
	for (let i = slideCount - slidesPerGroup; i < slideCount; i++) {
		const clone = valuesSlides[i].cloneNode(true)
		slidersContainer.appendChild(clone)
	}

	// Клонирование всех слайдов
	for (let i = 0; i < slideCount; i++) {
		const clone = valuesSlides[i].cloneNode(true)
		slidersContainer.appendChild(clone)
	}

	// Клонирование первых слайдов в конец
	for (let i = 0; i < slidesPerGroup; i++) {
		const clone = valuesSlides[i].cloneNode(true)
		slidersContainer.appendChild(clone)
	}
}

// Вызов функции клонирования слайдов и создания пагинации
cloneSlides()
createPagination()
updateSliderPosition()

window.addEventListener('resize', () => {
	slidesPerGroup = getSlidesPerGroup(window.innerWidth)
	totalGroups = Math.ceil(slideCount / slidesPerGroup)
	currentIndex = slidesPerGroup // Обновление начального индекса
	updateSlider()
	cloneSlides() // Переклонирование слайдов при изменении размера окна
	createPagination() // Создание элементов пагинации при изменении размера окна
	updateSliderPosition()
})

function valuesMove() {
	const points = document.querySelectorAll('.values-pagination')
	for (let k = 0; k < points.length; k++) {
		points[k].classList.remove('values-pagination-active')
	}
	currentIndex++

	slidersContainer.style.transition = `transform 0.75s ease`
	slidersContainer.style.transform = `translateX(-${
		(currentIndex * 100) / slidesPerGroup
	}%)`

	if (currentIndex === slideCount + slidesPerGroup) {
		currentIndex = slidesPerGroup
		setTimeout(() => {
			slidersContainer.style.transition = 'none'
			slidersContainer.style.transform = `translateX(-${
				(currentIndex * 100) / slidesPerGroup
			}%)`
		}, 750)
	}

	const activeIndex = (currentIndex - slidesPerGroup) % totalGroups
	if (points[activeIndex]) {
		points[activeIndex].classList.add('values-pagination-active')
	}
}

setInterval(valuesMove, 3000)

function updateSlider() {
	slidersContainer.style.transition = 'none'
	slidersContainer.style.transform = `translateX(-${
		(currentIndex * 100) / slidesPerGroup
	}%)`
	const points = document.querySelectorAll('.values-pagination')
	for (let i = 0; i < points.length; i++) {
		points[i].classList.remove('values-pagination-active')
	}
	if (points.length > 0) {
		points[0].classList.add('values-pagination-active')
	}
}

function updateSliderPosition() {
	slidersContainer.style.transition = 'none'
	slidersContainer.style.transform = `translateX(-${
		(slidesPerGroup * 100) / slidesPerGroup
	}%)`
}

////////////////////////////////////////////////////// REVIEWS
const reviewsContainer = document.querySelector('.reviews__slides')
const reviewsSlides = document.querySelectorAll('.reviews__slide')

let reviewsCurrent = 0

// Клонируем первый слайд и добавляем его в конец контейнера
const reviewsClone = reviewsSlides[0].cloneNode(true)
reviewsContainer.appendChild(reviewsClone)

function reviewsMove() {
	reviewsCurrent++
	reviewsContainer.style.transition = `transform 0.75s ease-in-out`
	reviewsContainer.style.transform = `translateX(-${reviewsCurrent * 100}%)`

	// Если дошли до конца, возвращаемся к началу
	if (reviewsCurrent === reviewsSlides.length) {
		setTimeout(() => {
			reviewsContainer.style.transition = `none`
			reviewsContainer.style.transform = `translateX(0)`
			reviewsCurrent = 0
		}, 750)
	}
}

setInterval(reviewsMove, 3000)

/////////////////////////////////
