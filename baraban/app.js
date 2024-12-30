let wheel = document.getElementById('wheel')

function spinWheel() {
    let duration = Math.random() * 3 + 2
    let rotations = Math.random() * 3600 + 720

    wheel.style.transition = `transform ${duration}s ease-out`
    wheel.style.transform = `rotate(${rotations}deg)`

    wheel.style.pointerEvents = 'none'

    setTimeout(() => {
        wheel.style.pointerEvents = 'auto'
    }, duration * 1000)
}