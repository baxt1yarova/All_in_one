let color=document.querySelector('.question3')
color.onclick=()=>{
    let randomColor1=parseInt(Math.random()*256)
    let randomColor2=parseInt(Math.random()*256)
    let randomColor3=parseInt(Math.random()*256)
    let button=document.querySelector(".question3")
    button.style.backgroundColor=`rgba(${randomColor1},${randomColor2},${randomColor3})`
}