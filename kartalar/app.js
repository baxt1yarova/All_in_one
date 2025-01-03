let kartalar=[
    'dama-chitan.jpg',
    'dama-karyuch.jpg',
    'dama-olma.jpg',
    'dama-qorak.jpg',
    'karol-chitan.jpg',
    'karol-karyuch.jpg',
    'karol-olma.jpg',
    'karol-qorak.jpg',
    'valyet-chitan.jpg',
    'valyet-karuch.jpg',
    'valyet-olma.jpg',
    'valyet-qorak.jpg',
    'dama-chitan.jpg',
    'dama-karyuch.jpg',
    'dama-olma.jpg',
    'dama-qorak.jpg',
    'karol-chitan.jpg',
    'karol-karyuch.jpg',
    'karol-olma.jpg',
    'karol-qorak.jpg',
    'valyet-chitan.jpg',
    'valyet-karuch.jpg',
    'valyet-olma.jpg',
    'valyet-qorak.jpg'
]
let cards=document.querySelectorAll('.card')
for(let i=0;i<=23; i++){
    cards[i].src='img/back.jpg'
}
window.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        for(let i=0; i<=100;i++){
            let rand1=Math.floor(Math.random()*100)%24
            let rand2=Math.floor(Math.random()*100)%24

            let t=kartalar[rand1]
            kartalar[rand1]=kartalar[rand2]
            kartalar[rand2]=t
        }
        for(let i=0;i<=23; i++){
            cards[i].src='img/back.jpg'
        }
    }
})
let k=0
let firstCard=null
let secondCard=null
cards.forEach((item,index)=>{
    item.onclick=()=>{
        k++
        item.style.transform='rotateY(180deg)'
        setTimeout(function(){
            item.src='img/'+kartalar[index]
            if(k==1){
                firstCard=item
            }
            else{
                secondCard=item
            }
        },300)
        
        setTimeout(()=>{
            if(firstCard!=null && secondCard!=null){
                if(firstCard.src!=secondCard.src){
                    firstCard.src='img/back.jpg'
                    secondCard.src='img/back.jpg'
                    k=0
                    firstCard=null
                    secondCard=null
                }
                else{
                    k=0
                    firstCard=null
                    secondCard=null
                }
            }
        },1200)
    }
})
