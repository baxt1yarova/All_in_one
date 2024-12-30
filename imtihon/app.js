let k=0
let question=document.querySelector('.question1')
question.onclick=()=>{
    let p=document.querySelector(".answer1")
    k+=1
    p.textContent=k
}