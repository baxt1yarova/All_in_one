let col1_img=[
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png',
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png',
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png'
]

let col2_img=[...col1_img]

let col3_img=[...col1_img]

let col1=document.querySelector('.col-1')
let col2=document.querySelector('.col-2')
let col3=document.querySelector('.col-3')

for(let i=0;i<30;i++){
    let img=document.createElement('img')
    col1.appendChild(img)
    for(let j=0; j<=100;j++){
        let rand1=Math.floor(Math.random()*100)%30
        let rand2=Math.floor(Math.random()*100)%30

        let t=col1_img[rand1]
        col1_img[rand1]=col1_img[rand2]
        col1_img[rand2]=t
    }
    img.src=col1_img[i]
}

for(let i=0;i<30;i++){
    let img=document.createElement('img') 
    col2.appendChild(img)
    for(let j=0; j<=100;j++){
        let rand1=Math.floor(Math.random()*100)%30
        let rand2=Math.floor(Math.random()*100)%30

        let t=col2_img[rand1]
        col2_img[rand1]=col2_img[rand2]
        col2_img[rand2]=t
    }
    img.src=col2_img[i]
}

for(let i=0;i<30;i++){
    let img=document.createElement('img')
    col3.appendChild(img)
    for(let j=0; j<=100;j++){
        let rand1=Math.floor(Math.random()*1000)%30
        let rand2=Math.floor(Math.random()*1000)%30

        let t=col3_img[rand1]
        col3_img[rand1]=col3_img[rand2]
        col3_img[rand2]=t
    }
    img.src=col3_img[i]
}

let img1=document.querySelectorAll('.col-1 img')
let img2=document.querySelectorAll('.col-2 img')
let img3=document.querySelectorAll('.col-3 img')
let k=0
let score=document.querySelector('.score')

window.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        let x1=Math.floor(Math.random()*15)
        img1.forEach((item,h)=>{
            item.style.transform=`translateY(-${x1*100}%)`
        })

        let x2=Math.floor(Math.random()*15)
        img2.forEach((item,h)=>{
            item.style.transform=`translateY(-${x2*100}%)`
        })
    
        let x3=Math.floor(Math.random()*15)
        img3.forEach((item,h)=>{
            item.style.transform=`translateY(-${x3*100}%)`
        })
        
    }
})





let score1 = 0;
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        setTimeout(calculateScore, 1000);
    }
});

function calculateScore() {
    const line = document.querySelector('.line');
    const lineRect = line.getBoundingClientRect();

    const col1Images = document.querySelectorAll('.col-1 img');
    const col2Images = document.querySelectorAll('.col-2 img');
    const col3Images = document.querySelectorAll('.col-3 img');

    const imagesInLine = [col1Images, col2Images, col3Images].map((images) => {
        const lineImage = Array.from(images).find(img => {
            const imgRect = img.getBoundingClientRect();
            return lineRect.top < imgRect.bottom &&
                   lineRect.bottom > imgRect.top;
        });

        if (lineImage) {
            const lineImageIndex = Array.from(images).indexOf(lineImage);
            return images[lineImageIndex + 1] || null;
        }
        return null;
    });

    const imageSources = imagesInLine.map(img => img ? img.src : null);
    const uniqueImages = [...new Set(imageSources.filter(src => src !== null))];
    
    
    if (uniqueImages.length === 1) {
        score1 += 2;
    } else if (uniqueImages.length === 2) {
        score1 += 1;
    }

    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = score1;
}

