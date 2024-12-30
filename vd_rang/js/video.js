let videos = document.querySelectorAll('.video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play() // Video boshlaydi
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});