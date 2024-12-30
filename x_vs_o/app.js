let btn=true
let natija=[]
let restart=document.querySelector('.restart')
let game=document.querySelector('.game-display')
document.querySelectorAll('.square').forEach((item,num) => {
    item.addEventListener('click',()=>{
        if (item.textContent==''){
            if(btn==true){
                item.textContent='X'
                btn=false
                natija[num]='X'
            }
            else{
                item.textContent='O'
                btn=true
                natija[num]='O'
            }
            hisoblash();
        }
    })
})

function hisoblash(){
    if((natija[0]+natija[1]+natija[2]=='XXX') || 
    (natija[3]+natija[4]+natija[5]=='XXX') || 
    (natija[6]+natija[7]+natija[8]=='XXX') ||
    (natija[0]+natija[3]+natija[6]=='XXX') ||
    (natija[1]+natija[4]+natija[7]=='XXX') ||
    (natija[2]+natija[5]+natija[8]=='XXX') ||
    (natija[0]+natija[4]+natija[8]=='XXX') ||
    (natija[2]+natija[4]+natija[6]=='XXX')){
        restart.style.display='block'
        game.style.filter='blur(5px)'
        restart.style.width='500px' 
        restart.style.height='100px'
        restart.style.borderRadius='15px'
        restart.style.backgroundColor='blue'
        restart.style.borderColor='blue'
        restart.textContent="X wins😎"

    }
    else if((natija[0]+natija[1]+natija[2]=='OOO') || 
    (natija[3]+natija[4]+natija[5]=='OOO') || 
    (natija[6]+natija[7]+natija[8]=='OOO') ||
    (natija[0]+natija[3]+natija[6]=='OOO') ||
    (natija[1]+natija[4]+natija[7]=='OOO') ||
    (natija[2]+natija[5]+natija[8]=='OOO') ||
    (natija[0]+natija[4]+natija[8]=='OOO') ||
    (natija[2]+natija[4]+natija[6]=='OOO')){
        restart.style.display='block'
        game.style.filter='blur(5px)'
        restart.style.width='500px' 
        restart.style.height='100px'
        restart.style.borderRadius='15px'
        restart.style.backgroundColor='blue'
        restart.style.borderColor='blue'
        restart.textContent="O wins😎"
    }
}
restart.onclick=()=>{
    document.querySelectorAll('.square').forEach((item,num) => {
        item.textContent=''
        restart.style.display='none'
        game.style.filter='blur(0)'
    })
}