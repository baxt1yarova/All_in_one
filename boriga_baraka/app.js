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

document.querySelectorAll('.gift').forEach(item => {
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
let gift=document.querySelectorAll('gift')
let m=['Q','W','E','R','T','Y','U','I','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
window.addEventListener('keypress',(e)=>{
    document.querySelectorAll('.letter').forEach(item1 => {
        item1.addEventListener('click',()=>{
            for(let i=0;i++;24){
                if(e.key==m[i]){
                    let gift1=gift[i]
                    gift1.style.transform='rotateY(180deg)'
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
    })
})
