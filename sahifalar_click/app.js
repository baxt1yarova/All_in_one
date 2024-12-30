let heading=document.querySelectorAll('.heading')
let buttons=document.querySelectorAll('button')
buttons.forEach((x,index)=>{
    x.onclick=()=>{
        if(x.textContent=='+'){
            heading[index].style.height='auto'
            x.textContent='-'
        }
        else{
            heading[index].style.height='35px'
            x.textContent='+'
        }
    }
})
