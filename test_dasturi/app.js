let p=document.querySelector('.test-question-text')
let next=document.querySelector('.next')
let prev=document.querySelector('.prev')
let numbers=document.querySelectorAll('.test-numbers button')
let question_json=['1. 1 yilda necha kun bor?',
    '2. 1 oyda necha kun bor?',
    '3. 1 kunda necha soat bor?',
    '4. 1 soatda necha daqiqa bor?',
    '5. 1 daqiqada necha soniya bor?',
    '6. 1 haftada necha kun bor?',
    '7. Dushanba ingliz tilida qanday?',
    '8. Olma ingliz qilida qanday aytiladi?',
    '9. Nyutonning nechta qonuni bor?',
    '10. Nechta fasl bor?',
    '11. 1 faslda necha oy bor?',
    '12. 1 yilda necha oy bor?',
    '13. Yangi yil sanasi qaysi?',
    '14. Navroz bayrami qaysi oyda?',
    '15. 8-mart qanday kun?'
]
let i=0
next.onclick=()=>{
    i+=1
    if(i==15){
        i=0
    }
    p.textContent=question_json.at(i)
}
prev.onclick=()=>{
    i-=1
    if(i==-16){
        i=14
    }
    p.textContent=question_json.at(i)
}
numbers.forEach((x,index)=>{
    x.onclick=()=>{
        p.textContent=question_json[index]
        i=index
    }
})