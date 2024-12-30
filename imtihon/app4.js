let text=document.querySelector(".answer4")
text.addEventListener('input',run)
function run(){
    let result=document.querySelector(".question4")
    result.textContent=text.value
}