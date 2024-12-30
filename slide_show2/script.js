let thumbnails = document.querySelector('.thumbnail')
let largeImage = document.getElementById('largeImage')
let nextButton = document.querySelector('.next')
let prevButton = document.querySelector('.prev')

let currentIndex = 0
let images = [
    { src: 'bear.jpg', alt: 'Brown Bear' },
    { src: 'bori.jpg', alt: 'Red Fox' },
    { src: 'lion.jpg', alt: 'Gray Wolf' },
    { src: 'tiger.jpg', alt: 'Gray Wolf' }
]

function updateLargeImage(index, direction) {
    let nextImage = images[index]

    let tempImage = document.createElement('img')
    tempImage.src = nextImage.src
    tempImage.alt = nextImage.alt
    tempImage.style.position = 'absolute'
    tempImage.style.width = '100%'
    tempImage.style.height = '100%'
    tempImage.style.top = '0'
    tempImage.style.left = direction === 'next' ? '100%' : '-100%'
    tempImage.style.transition = 'left 0.5s ease-in-out'

    thumbnails.src = nextImage.src
    thumbnails.alt = nextImage.alt
    thumbnails.style.transition = 'left 0.5s ease-in-out'

    largeImage.parentNode.appendChild(tempImage)

    setTimeout(() => {
        tempImage.style.left = '0'
        largeImage.style.left = direction === 'next' ? '-100%' : '100%'
    }, 10);

    tempImage.addEventListener('transitionend', () => {
        largeImage.src = nextImage.src
        largeImage.alt = nextImage.alt
        largeImage.style.left = '0'
        tempImage.remove()
    })
}

function showNextImage() {
    let nextIndex = (currentIndex + 1) % images.length
    updateLargeImage(nextIndex, 'next')
    currentIndex = nextIndex
}

function showPrevImage() {
    let prevIndex = (currentIndex - 1 + images.length) % images.length
    updateLargeImage(prevIndex, 'prev')
    currentIndex = prevIndex
}

nextButton.addEventListener('click', showNextImage)
prevButton.addEventListener('click', showPrevImage)

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        let direction = index > currentIndex ? 'next' : 'prev';
        updateLargeImage(index, direction)
        currentIndex = index
    })
})