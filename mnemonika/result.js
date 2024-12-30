let clear=document.querySelector('.clear')
let basket=document.querySelector('.basket')


let item_json=JSON.parse(localStorage.getItem('xotira'))


for(let i=0; i<item_json.length; i++){
    let div=document.createElement('div')
    div.innerHTML=`<p>${i+1}</p>`
    div.classList.add('item')
    basket.appendChild(div)
}

let item=document.querySelectorAll('.item')
item.forEach((x,index)=>{
    x.onclick=()=>{
        let d=item_json[index]
        x.innerHTML=`<img src="${d}"></img>`
    }
})

clear.onclick=()=>{
    item_json=[]
    localStorage.setItem('xotira', JSON.stringify(item_json));
    basket.innerHTML=''
}