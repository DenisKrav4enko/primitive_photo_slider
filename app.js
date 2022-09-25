const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else {
        activeSlideIndex --
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
downButton.addEventListener('click', () => {
    changeSlide('down')
})

upButton.addEventListener('click', () => {
    changeSlide('up')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        changeSlide('down')
    }
})
