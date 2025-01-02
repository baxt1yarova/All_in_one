let user_photo=document.querySelector('.user-photo')
let computer_photo=document.querySelector('.computer-photo')
let user_score=document.querySelector('.user-score')
let computer_score=document.querySelector('.computer-score')
let restart=document.querySelector('.restart')
let k=0
let p=0
let n=0
let m=0
let d1=0
let d2=0
let user_load=document.querySelector('.user-load')
let comp_load=document.querySelector('.comp-load')

window.addEventListener('keypress',(e)=>{
    user_load.style.display='flex'
    comp_load.style.display='flex'
    if(e.key=='1'){
        user_photo.src='img/qogoz1.jpg'
        n=1
        d1++
        user_load.style.display='none'
    }
    if(e.key=='2'){
        user_photo.src='img/qaychi1.jpg'
        n=3
        d1++
        user_load.style.display='none'
    }
    if(e.key=='3'){
        user_photo.src='img/tosh1.jpg'
        n=2
        d1++
        user_load.style.display='none'
    }
    if(e.key.toLowerCase()=='q'){
        computer_photo.src='img/qogoz2.jpg'
        m=1
        d2++
        comp_load.style.display='none'
    }
    if(e.key.toLowerCase()=='w'){
        computer_photo.src='img/qaychi2.jpg'
        m=3
        d2++
        comp_load.style.display='none'
    }
    if(e.key.toLowerCase()=='e'){
        computer_photo.src='img/tosh2.jpg'
        m=2
        d2++
        comp_load.style.display='none'
    }
    if(d1==d2){
        user_load.style.display = 'none'
        comp_load.style.display = 'none'
        setTimeout(() => {
            user_load.style.display = 'flex'
            comp_load.style.display = 'flex'
        }, 1000)
    }
    if(n==m && d1==d2){
        k+=1
        p+=1
        user_score.textContent=p
        computer_score.textContent=k
    }
    else if(((n==1 && m==2) || (n==2 && m==3) || (n==3 && m==1))&& d1==d2){
        p+=1
        user_score.textContent=p
    }
    else if(((n==2 && m==1) || (n==3 && m==2) || (n==1 && m==3))&& d1==d2){
        k+=1
        computer_score.textContent=k
    }
})


restart.addEventListener('click',()=>{
    computer_score.textContent=0
    user_score.textContent=0
    user_photo.src=''
    computer_photo.src=''
    k=0
    p=0
})