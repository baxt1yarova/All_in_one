function raqam() {
    let son = document.querySelector('#number').value;
    let div = document.querySelector('.raqamlar');
    div.innerHTML=''
    son = parseInt(son);
    let raqamlar = [];
    while (son != 0) {
        raqamlar.push(son % 10);
        son = Math.floor(son / 10);
    }
    raqamlar.reverse().forEach(function(raqam,index) {
        let p = document.createElement('p');
        p.textContent =`Sonning ${index+1}-raqami: ${raqam}`;
        div.appendChild(p);
    });
}
