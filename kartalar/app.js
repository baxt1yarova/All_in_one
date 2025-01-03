let kartalar = [
    'dama-chitan.jpg', 'dama-karyuch.jpg', 'dama-olma.jpg', 'dama-qorak.jpg',
    'karol-chitan.jpg', 'karol-karyuch.jpg', 'karol-olma.jpg', 'karol-qorak.jpg',
    'valyet-chitan.jpg', 'valyet-karuch.jpg', 'valyet-olma.jpg', 'valyet-qorak.jpg',
    'dama-chitan.jpg', 'dama-karyuch.jpg', 'dama-olma.jpg', 'dama-qorak.jpg',
    'karol-chitan.jpg', 'karol-karyuch.jpg', 'karol-olma.jpg', 'karol-qorak.jpg',
    'valyet-chitan.jpg', 'valyet-karuch.jpg', 'valyet-olma.jpg', 'valyet-qorak.jpg'
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let cards = document.querySelectorAll('.card');
shuffle(kartalar);

cards.forEach(card => {
    card.src = 'img/back.jpg';
});

let k = 0;
let firstCard = null;
let secondCard = null;

cards.forEach((item, index) => {
    item.onclick = () => {
        if (item.src.includes('back.jpg')) {
            k++;
            item.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                item.src = 'img/' + kartalar[index];
                if (k === 1) {
                    firstCard = item;
                } else {
                    secondCard = item;
                    if (firstCard.src.split('/').pop() === secondCard.src.split('/').pop()) {
                        firstCard = null;
                        secondCard = null;
                        k = 0;
                    } else {
                        setTimeout(() => {
                            firstCard.src = 'img/back.jpg';
                            secondCard.src = 'img/back.jpg';
                            firstCard = null;
                            secondCard = null;
                            k = 0;
                        }, 1000);
                    }
                }
            }, 500);
        }
    };
});
