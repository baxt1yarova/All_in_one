let lastText=document.querySelector('.last-text')
let newText=document.querySelector('.new-text')

newText.textContent='Lorem, ipsum dolor sit amet'
let matn=newText.textContent
let audio1=new Audio('audio/2.wav')
let audio2=new Audio('audio/1.mp3')
let audio3=new Audio('audio/6.mp3')
window.addEventListener('keypress',(e)=>{
    if(e.key==matn[0]){
        newText.textContent=matn.slice(1)
        lastText.textContent+=matn[0]
        matn=matn.slice(1)
        audio1.currentTime=0
        audio1.play()
    }
    else{
        audio2.currentTime=0
        audio2.play()
    }
    if(matn.length==0){
        audio3.play()
    }
})