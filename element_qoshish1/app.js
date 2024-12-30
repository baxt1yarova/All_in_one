let container=document.querySelector('.container')
let add=document.querySelector('.add')
let remove=document.querySelector('.remove')
add.onclick=()=>{
    let red=document.querySelector('#red').value
    let green=document.querySelector('#green').value
    let blue=document.querySelector('#blue').value
    let width=document.querySelector('#width').value
    let height=document.querySelector('#height').value
    let h1=document.createElement('h1')
    h1.textContent='Bu yangi h1 element'
    h1.style.backgroundColor=`rgb(${red},${green},${blue})`
    h1.style.width=`${width}px`
    h1.style.height=`${height}px`
    container.appendChild(h1)
}
remove.onclick=()=>{
    let d=container.querySelector('h1:last-child')
    container.removeChild(d)
}