let question=document.querySelector(".question")
let rand=Math.floor(Math.random()*1000000)
question.textContent=rand
let n=0

window.addEventListener('keypress',run)

function run(e){
    let answer=document.querySelector(".answer")

    if(e.key==' '){
        answer.textContent=''
    }
    else if(!isNaN(e.key)){
        answer.textContent+=e.key
    }
    else if(e.key=='Enter'){
        n+=1
        let son=answer.textContent
        if(son==rand){
            let result=document.querySelector(".result")
            let h4=document.createElement("h4")
            h4.textContent=`${n}✅`
            result.appendChild(h4)
        }
        else{
            let result=document.querySelector(".result")
            let h4=document.createElement("h4")
            h4.textContent=`${n}❌`
            result.appendChild(h4)
        }
        answer.textContent=''
        rand=Math.floor(Math.random()*1000000)
        question.textContent=rand
    }
}