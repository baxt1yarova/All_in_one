let letter=document.querySelector('.letter-number')
let main=document.querySelector('.main-display')
let score=document.querySelector('.score')
let p=document.querySelector('p')
let matn='ABCDEFGHIJKLMNOPQRSTUVWXYZQWERYTUOFGNHJASAXMN'
let k=0
let audio1=new Audio('3.mp3')
let audio2=new Audio('6.mp3')
let d=matn.length
window.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){  
        p.style.display='block'
        p.textContent=e.key
        setTimeout(() => {
            p.style.display = 'none';
        }, 500);
        setInterval(function(){
            if(matn.length!=0){
                letter.textContent=`Qolgan harflar:${d} ta`
                let span=document.createElement('span')
                span.textContent=matn[0]
                matn=matn.slice(1)
                d-=1
                let rand=Math.floor(Math.random()*main.offsetWidth)
                span.style.transform=`translateX(${rand}px)`
                main.appendChild(span)
                if(d==0){
                    letter.textContent=`Qolgan harflar:0 ta`
                    d=0
                    setTimeout(() => {
                        audio2.play()
                    }, 3000);
                }
            }  
        },500)
        
    }
    else{
        document.querySelectorAll('.main-display span').forEach(item=>{
            if(item.textContent==e.key){
                item.textContent='💥'
                p.style.display='block'
                p.textContent=e.key
                setTimeout(() => {
                    p.style.display = 'none';
                }, 500);
                k+=1
                audio1.currentTime=0
                audio1.play()
                score.textContent=`To'g'ri:${k} ta`
            }
        })
        
    }
    
})