let container=document.querySelector('.container')
let add=document.querySelector('.add')
let remove=document.querySelector('.remove')
add.onclick=()=>{
    let text=document.querySelector('#text').value
    let width=document.querySelector('#width').value
    let height=document.querySelector('#height').value
    let size=document.querySelector('#size').value
    let color=document.querySelector('#color').value
    
    let h1=document.createElement('h1')
    h1.textContent=text
    h1.style.width=`${width}%`
    h1.style.height=`${height}vh`
    h1.style.fontSize=`${size}px`
    h1.style.backgroundColor=`#${color}`
    
    container.appendChild(h1)
}
remove.onclick=()=>{
    let d=container.querySelector('h1:last-child')
    container.removeChild(d)
}