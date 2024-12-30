let carX1=0
let carY1=0


function run1(x){
    let car1=document.querySelector(".car1")
    switch(x.key){
        case 'ArrowRight':
            car1.style.transform=`rotate(90deg)`
            carX1+=10
            break;
        case 'ArrowLeft':
            car1.style.transform=`rotate(270deg)`
            carX1-=10
            break;
        case 'ArrowUp':
            car1.style.transform=`rotate(0deg)`
            carY1-=10
            break;
        case 'ArrowDown':
            car1.style.transform=`rotate(180deg)`
            carY1+=10
            break;  
    }
    car1.style.left=`${carX1}px`
    car1.style.top=`${carY1}px`
}


let carX2=0
let carY2=0


function run2(y){
    let car2=document.querySelector(".car2")
    switch(y.key){
        case 'd':
            car2.style.transform=`rotate(90deg)`
            carX2+=10
            break;
        case 'a':
            car2.style.transform=`rotate(270deg)`
            carX2-=10
            break;
        case 'w':
            car2.style.transform=`rotate(0deg)`
            carY2-=10
            break;
        case 's':
            car2.style.transform=`rotate(180deg)`
            carY2+=10
            break;  
    }
    car2.style.left=`${carX2}px`
    car2.style.top=`${carY2}px`
}



window.addEventListener('keydown',run1)
window.addEventListener('keydown',run2)