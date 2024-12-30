/* color 1 uchun */
let a1=0, b1=0, c1=5
let color1=document.querySelector('.color1')
let text1=document.querySelector('.text1')
text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
color1.onclick=()=>{
    if(c1<255 && b1==0 && a1==0){
        c1+=5
        text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
        color1.style.backgroundColor=`rgb(${a1}, ${b1}, ${c1})`
    }
    else if(c1==255){
        c1=0
        b1+=5
        text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
        color1.style.backgroundColor=`rgb(${a1}, ${b1}, ${c1})`
    }
    else if(c1<=255 && b1<255 && b1!=0 && a1==0){
        c1+=5
        text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
        color1.style.backgroundColor=`rgb(${a1}, ${b1}, ${c1})`
    }
    else if(b1==255){
        b1=0
        c1+=5
        a1+=5
        text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
        color1.style.backgroundColor=`rgb(${a1}, ${b1}, ${c1})`
    }
    else if(c1<=255 && b1<255 && b1!=0 && a1!=0 && a1<255){
        c1+=5
        b1+=5
        a1+=5
        text1.textContent=`rgb(${a1}, ${b1}, ${c1})`
        color1.style.backgroundColor=`rgb(${a1}, ${b1}, ${c1})`
    }
}


/* color 2 uchun */
let a2=0, b2=5, c2=0
let color2=document.querySelector('.color2')
let text2=document.querySelector('.text2')
text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
color2.onclick=()=>{
    if(c2==0 && b2<255 && a2==0){
        b2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
    else if(b2==255){
        b2=0
        a2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
    else if(c2==0 && b2<255 && a2!=0 && a2<255){
        b2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
    else if(a2==255){
        a2=0
        c2+=5
        b2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
    else if(c2<=255 && b2<255 && a2!=0 && a2<255){
        b2+=5
        a2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
    else if(c2==255){
        c2=0
        a2+=5
        b2+=5
        text2.textContent=`rgb(${a2}, ${b2}, ${c2})`
        color2.style.backgroundColor=`rgb(${a2}, ${b2}, ${c2})`
    }
}


/* color 3 uchun */
let a3=5, b3=0, c3=0
let color3=document.querySelector('.color3')
let text3=document.querySelector('.text3')
text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
color3.onclick=()=>{
    if(c3==0 && b3==0 && a3<255){
        a3+=5
        text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
        color3.style.backgroundColor=`rgb(${a3}, ${b3}, ${c3})`
    }
    else if(a3==255){
        a3=0
        c3+=5
        text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
        color3.style.backgroundColor=`rgb(${a3}, ${b3}, ${c3})`
    }
    else if(b3==0 && a3<255 && c3!=0 && c3<255){
        a3+=5
        text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
        color3.style.backgroundColor=`rgb(${a3}, ${b3}, ${c3})`
    }
    else if(c3==255){
        c3=0
        b3+=5
        a3+=5
        text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
        color3.style.backgroundColor=`rgb(${a3}, ${b3}, ${c3})`
    }
    else if(b3==255){
        b3=0
        a3+=5
        c3+=5
        text3.textContent=`rgb(${a3}, ${b3}, ${c3})`
        color3.style.backgroundColor=`rgb(${a3}, ${b3}, ${c3})`
    }
}


/* color 4 uchun */
let a4=5, b4=0, c4=5
let color4=document.querySelector('.color4')
let text4=document.querySelector('.text4')
text4.textContent=`rgb(${a4}, ${b4}, ${c4})`
color4.onclick=()=>{
    if(a4<255 && b4==0 && c4<255){
        a4+=5
        c4+=5
        text4.textContent=`rgb(${a4}, ${b4}, ${c4})`
        color4.style.backgroundColor=`rgb(${a4}, ${b4}, ${c4})`
    }
    else if(a4==255 && c4==255){
        a4=0
        c4=0
        b4+=5
        text4.textContent=`rgb(${a4}, ${b4}, ${c4})`
        color4.style.backgroundColor=`rgb(${a4}, ${b4}, ${c4})`
    }
    else if(a4<255 && c4<255 && b4<255 && b4!=0){
        a4+=5
        c4+=5
        text4.textContent=`rgb(${a4}, ${b4}, ${c4})`
        color4.style.backgroundColor=`rgb(${a4}, ${b4}, ${c4})`
    }
    else if(b4==255){
        b4=0
        a4+=5
        c4+=5
        text4.textContent=`rgb(${a4}, ${b4}, ${c4})`
        color4.style.backgroundColor=`rgb(${a4}, ${b4}, ${c4})`
    }
}




/* color 5 uchun */
let a5=5, b5=5, c5=0
let color5=document.querySelector('.color5')
let text5=document.querySelector('.text5')
text5.textContent=`rgb(${a5}, ${b5}, ${c5})`
color5.onclick=()=>{
    if(a5<255 && c5==0 && b5<255){
        a5+=5
        b5+=5
        text5.textContent=`rgb(${a5}, ${b5}, ${c5})`
        color5.style.backgroundColor=`rgb(${a5}, ${b5}, ${c5})`
    }
    else if(a5==255 && b5==255){
        a5=0
        b5=0
        c5+=5
        text5.textContent=`rgb(${a5}, ${b5}, ${c5})`
        color5.style.backgroundColor=`rgb(${a5}, ${b5}, ${c5})`
    }
    else if(a5<255 && b5<255 && c5<255 && c5!=0){
        b5+=5
        a5+=5
        text5.textContent=`rgb(${a5}, ${b5}, ${c5})`
        color5.style.backgroundColor=`rgb(${a5}, ${b5}, ${c5})`
    }
    else if(c5==255){
        c5=0
        a5+=5
        b5+=5
        text5.textContent=`rgb(${a5}, ${b5}, ${c5})`
        color5.style.backgroundColor=`rgb(${a5}, ${b5}, ${c5})`
    }
}





/* color 6 uchun */
let a6=5, b6=5, c6=5
let color6=document.querySelector('.color6')
let text6=document.querySelector('.text6')
text6.textContent=`rgb(${a6}, ${b6}, ${c6})`
color6.onclick=()=>{
    if(a6<255 && b6<255 && c6<255){
        a6+=5
        b6+=5
        c6+=5
        text6.textContent=`rgb(${a6}, ${b6}, ${c6})`
        color6.style.backgroundColor=`rgb(${a6}, ${b6}, ${c6})`
    }
    else if(a6==255 && c6==255 && b6==255){
        a6=0
        b6=0
        c6=0
        text6.textContent=`rgb(${a6}, ${b6}, ${c6})`
        color6.style.backgroundColor=`rgb(${a6}, ${b6}, ${c6})`
    }
}
