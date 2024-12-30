let words=document.querySelector('.words')
let game_display=document.querySelector('.game-display')

let word_json={
    'VATAN':['V','A','T','A','N'],
    'TIRIK': ['T', 'I', 'R', 'I', 'K'],
    'ONA': ['O', 'N', 'A'],
    'KITOB': ['K', 'I', 'T', 'O', 'B'],
    'DARAXT': ['D', 'A', 'R', 'A', 'X', 'T'],
    'BOLALAR': ['B', 'O', 'L', 'A', 'L', 'A', 'R'],
    'SHOH': ['S', 'H', 'O', 'H'],
    'XALQ': ['X', 'A', 'L', 'Q'],
    'HAYOT': ['H', 'A', 'Y', 'O', 'T'],
    'XAZINA': ['X', 'A', 'Z', 'I', 'N', 'A'],
    'OSMON': ['O', 'S', 'M', 'O', 'N'],
    'OLIM': ['O', 'L', 'I', 'M'],
    'DUNYO': ['D', 'U', 'N', 'Y', 'O'],
    'USTOZ': ['U', 'S', 'T', 'O', 'Z'],
    'OTA': ['O', 'T', 'A'],
    'QAHRAMON': ['Q', 'A', 'H', 'R', 'A', 'M', 'O', 'N']
}

let suzlar=Object.keys(word_json)

for(let i=0; i<=15;i++){
    let span=document.createElement('span')
    span.classList.add('word')
    span.textContent=suzlar[i]
    words.appendChild(span)
}

let allLetter=[]
for(let i=0;i<16;i++){
    allLetter.push(...word_json[suzlar[i]])
}

for(let i=0;i<allLetter.length;i++){
    let rand1=Math.floor(Math.random()*80)
    let rand2=Math.floor(Math.random()*80)
    t=allLetter[rand1]
    allLetter[rand1]=allLetter[rand2]
    allLetter[rand2]=t
}

for(let i=0;i<80;i++){
    let x=document.createElement('span')
    x.classList.add('letter')
    x.textContent=allLetter[i]
    game_display.appendChild(x)
}

let satr=''
let indeks=[]
let letters=document.querySelectorAll('.letter')
let w=document.querySelectorAll('.word')
letters.forEach((x,index)=>{
    x.onclick=function(){
        indeks.push(index)
        x.style.backgroundColor='green'
        satr+=x.textContent
        if (suzlar.includes(satr)) {
            for(let i=0;i<w.length;i++){
                if(w[i].textContent==satr){
                    w[i].style.color='red'
                }
            }
            
            for(let i=0;i<indeks.length;i++){
                letters[indeks[i]].textContent=''
                letters[indeks[i]].style.backgroundColor='#333'
            }
            indeks=[]
            satr=''
        }
    }
    
})

let back=document.querySelector('.back')
back.onclick=()=>{
    for(let i=0;i<indeks.length;i++){
        letters[indeks[i]].style.backgroundColor='#333'
    }
}