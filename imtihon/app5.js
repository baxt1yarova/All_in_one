
let p=document.querySelector('.ans5')
let button=document.querySelector('.question1')
button.onclick=()=>{
    let num1=document.querySelector('#num1').value
    let num2=document.querySelector('#num2').value
    p.textContent='Result: '+(Number(num1)+Number(num2))
}