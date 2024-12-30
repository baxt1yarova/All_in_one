let user_photo=document.querySelector('.user-photo')
let computer_photo=document.querySelector('.computer-photo')
let user_score=document.querySelector('.user-score')
let computer_score=document.querySelector('.computer-score')
let restart=document.querySelector('.restart')
let k=0
let p=0
let n=0
let m=0

document.querySelectorAll('.elements span').forEach(item=>{
    item.addEventListener('click',()=>{
        let random=parseInt(Math.random()*10000)%3
        if(item.textContent=='✋'){
            user_photo.src='img/qogoz1.jpg'
            n=1
        }
        else if(item.textContent=='✊'){
            user_photo.src='img/tosh1.jpg'
            n=2
        }
        else if(item.textContent=='✌️'){
            user_photo.src='img/qaychi1.jpg'
            n=3
        }
        if(random==0){
            computer_photo.src='img/qogoz2.jpg'
            m=1
        }
        else if(random==1){
            computer_photo.src='img/tosh2.jpg'
            m=2
        }
        else if(random==2){
            computer_photo.src='img/qaychi2.jpg'
            m=3
        }
        if(n==m){
            k+=1
            p+=1
            user_score.textContent=p
            computer_score.textContent=k
        }
        else if( (n==1 && m==2) || (n==2 && m==3) || (n==3 && m==1)){
            p+=1
            user_score.textContent=p
        }
        else if( (n==2 && m==1) || (n==3 && m==2) || (n==1 && m==3)){
            k+=1
            computer_score.textContent=k
        }
    })
})

restart.addEventListener('click',()=>{
    computer_score.textContent=0
    user_score.textContent=0
    user_photo.src=''
    computer_photo.src=''
    k=0
    p=0
})