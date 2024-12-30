let images = [
    { src: 'bear.jpg', name: 'BROWN BEAR' },
    { src: 'bori.jpg', name: 'BLACK WOLF' },
    { src: 'lion.jpg', name: 'YELLOW LION' },
    { src: 'tiger.jpg', name: 'RED TIGER' }
]
let currentImageIndex=0
let backgroundImage=document.getElementById("background-image")
let animalName=document.getElementById("animal-name")
let dots=document.querySelectorAll(".dot")

function changeImage(index) {
    if (index !== currentImageIndex) {
        backgroundImage.style.opacity = 0
        dots[currentImageIndex].classList.remove("active")
        dots[index].classList.add("active")

        setTimeout(() => {
            backgroundImage.src = images[index].src
            animalName.textContent = images[index].name
            backgroundImage.style.opacity = 1
        }, 1000)
        currentImageIndex = index
    }
}

dots.forEach((dot, index)=>{
    dot.addEventListener("click",()=>{
        changeImage(index)
    })
})