let check=document.querySelector('#dict-check')

let element=document.querySelector('.dict-list')
let icon1=document.querySelector('.icon1')
let icon2=document.querySelector('.icon2')
let k=true
let index=0
let num=document.querySelector('#dict-num').value
check.onclick=()=>{
    let choose=JSON.parse(localStorage.getItem('choosen'))
    if(k==true){
        element.innerHTML=`
        <div class="dict-one-item">
            <p class="dict-one-item-uzb">${choose[index]['name-uzb']}</p>
            <img src="photos/${choose[index]['img']}" alt="" class="dict-one-img">
            <p class="dict-one-item-eng">${choose[index]['name-eng']}</p>
        </div>`
        icon1.style.bottom='7vh'
        icon2.style.bottom='7vh'
        icon1.style.color='black'
        icon2.style.color='black'
        k=false
    }
    else if(k==false){
        icon1.style.display='none'
        icon2.style.display='none'

        element.innerHTML=` `
        for(let i=0;i<choose.length;i++){
            let list=document.createElement('div')
            list.classList.add('dict-item')
            list.innerHTML=`<p class="dict-item-uzb-name">${choose[i]['name-uzb']}</p>
                    <img src="photos/${choose[i]['img']}" class="dict-item-img">
                    <p class="dict-item-eng-name">${choose[i]['name-eng']}</p>`
            items.appendChild(list)
        }
        k=true
    }
    
}


icon1.onclick=()=>{
    let choose=JSON.parse(localStorage.getItem('choosen'))
    if(index>0){
        index-=1
    }
    else{
        index=choose.length-1
    }
    element.innerHTML = `
        <div class="dict-one-item">
            <p class="dict-one-item-uzb">${choose[index]['name-uzb']}</p>
            <img src="photos/${choose[index]['img']}" alt="" class="dict-one-img">
            <p class="dict-one-item-eng">${choose[index]['name-eng']}</p>
        </div>`
};
icon2.onclick=()=>{
    let choose=JSON.parse(localStorage.getItem('choosen'))
    if (index<choose.length-1) {
        index+=1
    } else{
        index=0
    }
    element.innerHTML = `
        <div class="dict-one-item">
            <p class="dict-one-item-uzb">${choose[index]['name-uzb']}</p>
            <img src="photos/${choose[index]['img']}" alt="" class="dict-one-img">
            <p class="dict-one-item-eng">${choose[index]['name-eng']}</p>
        </div>`
}