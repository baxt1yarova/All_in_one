let menu = document.querySelector('.menu');
let sideBar = document.querySelector('.side-bar');

menu.onclick = () => {
    sideBar.classList.toggle('active');
};
const close = document.querySelector('.side-bar h1 i');

close.onclick = () => {
    sideBar.classList.remove('active');
};
