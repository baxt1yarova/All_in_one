let thumbnails = document.querySelectorAll('.thumbnail')
let imageWrapper = document.getElementById('imageWrapper')
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let currentIndex = 0;

function updateSlider(index) {
    imageWrapper.style.transform = `translateX(-${index * 500}px)`
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index)
    });
}

nextBtn.onclick=()=>{
    currentIndex = (currentIndex + 1) % thumbnails.length
    updateSlider(currentIndex)
}

prevBtn.onclick=()=>{
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length
    updateSlider(currentIndex)
}

thumbnails.forEach((thumb, index) => {
    thumb.onclick=()=>{
        currentIndex = index
        updateSlider(currentIndex)
    }
})