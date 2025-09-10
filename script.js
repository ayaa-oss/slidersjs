let sliders = document.querySelectorAll('.slider')
let dotsContainer = document.querySelector('.dots_container') // Corrected variable name to match HTML
let nextBtn = document.querySelector('.nav.next')
let prevBtn = document.querySelector('.nav.prev')

let currentIndex = 0
let autoPlayInterval

function showSlider(index) {
    sliders.forEach((slider, i) => { // Corrected parameter name from 'slide' to 'slider'
        slider.classList.remove('active')
        if (dotsContainer.children[i]) {
            dotsContainer.children[i].classList.remove('active')
        }
    })
    sliders[index].classList.add('active')
    if (dotsContainer.children[index]) {
        dotsContainer.children[index].classList.add('active')
    }
}

function nextSlider() {
    currentIndex = (currentIndex + 1) % sliders.length
    showSlider(currentIndex)
}

function prevSlider() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length
    showSlider(currentIndex)
}

nextBtn.addEventListener('click', () => {
    nextSlider()
    resetAutoPlay() // Added this to reset the timer on manual click
})

prevBtn.addEventListener('click', () => {
    prevSlider()
    resetAutoPlay() // Added this to reset the timer on manual click
})

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlider, 5000) // Corrected 'setInterval1' to 'setInterval'
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval) // Corrected 'clearInterval1' to 'clearInterval'
    startAutoPlay()
}

function createDots() {
    sliders.forEach((_, i) => {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        dot.addEventListener('click', () => {
            currentIndex = i
            showSlider(currentIndex)
            resetAutoPlay()
        })
        dotsContainer.appendChild(dot)
    })
}

// Initial calls to set everything up
createDots()
showSlider(currentIndex) // Call this to show the first slider on page load
startAutoPlay()