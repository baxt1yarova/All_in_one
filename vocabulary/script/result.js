let items=document.querySelector('.dict-list')
let choose=JSON.parse(localStorage.getItem('choosen'))

items.innerHTML=` `
for(let i=0;i<choose.length;i++){
    let list=document.createElement('div')
    list.classList.add('dict-item')
    list.innerHTML=`<p class="dict-item-uzb-name">${choose[i]['name-uzb']}</p>
            <img src="../photos/${choose[i]['img']}" class="dict-item-img">
            <input type="text" name="text" class="inp">`
    items.appendChild(list)
}