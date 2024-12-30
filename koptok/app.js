const ball=document.querySelector('.ball');
const container=document.querySelector('.container');

let ballSpeedX=2;
let ballSpeedY=2;

function moveBall() {
    const ballRect=ball.getBoundingClientRect();
    const containerRect=container.getBoundingClientRect();

    if (ballRect.right>=containerRect.right || ballRect.left<=containerRect.left) {
        ballSpeedX=-ballSpeedX;
    }
    if(ballRect.bottom>=containerRect.bottom || ballRect.top<=containerRect.top) {
        ballSpeedY=-ballSpeedY;
    }

    ball.style.left=ball.offsetLeft+ballSpeedX+'px';
    ball.style.top=ball.offsetTop+ballSpeedY+'px';
    requestAnimationFrame(moveBall);
}
moveBall();