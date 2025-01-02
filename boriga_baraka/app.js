let data=[
    'Televizor',
    'Noutbook',
    'Salfetka',
    'Cobalt',
    'Telefon',
    '2 xonali uy',
    'Ruchka',
    'Kitob',
    'Sumka',
    'Klaviatura',
    'Sichqoncha',
    'Kir yuvish mashinasi',
    'Mikrovalnovka',
    'Lampochka',
    'Gugurt',
    'Mebel',
    'Italiyaga sayohat',
    'Iphone 16',
    '30 mln',
    '5 mln lik vaucher',
    'Damas',
    'Gaz plita',
    'Muzlatgich',
    'Velosiped'
]
let gift=document.querySelectorAll('.gift')
gift.forEach(item => {
    item.addEventListener('click',()=>{
        item.style.transform='rotateY(180deg)'
        setTimeout(function(){
            let ind=Math.floor(Math.random()*data.length)
            item.textContent=data[ind]
            item.style.background='none'
            item.style.textAlign='center'
            item.style.fontSize='19px'
            item.style.alignItems='center'
            item.style.transform='rotateY(0deg)'
            data.splice([ind],1)
        },500)
    })
})

let harf=['Q','W','E','R','T','Y','U','I','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']

window.addEventListener('keypress',(e)=>{
    for(let i=0;i<harf.length;i++){
        if(e.key==harf[i]){
            let gift1=gift[i]
            gift[i].style.transform='rotateY(180deg)'
            setTimeout(function(){
                let ind=Math.floor(Math.random()*data.length)
                gift1.textContent=data[ind]
                gift1.style.background='none'
                gift1.style.textAlign='center'
                gift1.style.fontSize='19px'
                gift1.style.alignItems='center'
                gift1.style.transform='rotateY(0deg)'
                data.splice([ind],1)
            },500)
        }
    }
})

let m=document.querySelectorAll('.letter')
m.forEach((x,index)=>{
    x.onclick=()=>{
        let gift1=gift[index]
        gift[index].style.transform='rotateY(180deg)'
        setTimeout(function(){
            let ind=Math.floor(Math.random()*data.length)
            gift1.textContent=data[ind]
            gift1.style.background='none'
            gift1.style.textAlign='center'
            gift1.style.fontSize='19px'
            gift1.style.alignItems='center'
            gift1.style.transform='rotateY(0deg)'
            data.splice([ind],1)
        },500)
    }
})