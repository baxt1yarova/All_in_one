let p = document.querySelector('.test-question-text');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let numbers = document.querySelectorAll('.test-numbers button');
let variants = {
    A: document.querySelector('.test-variant-text.A'),
    B: document.querySelector('.test-variant-text.B'),
    C: document.querySelector('.test-variant-text.C'),
    D: document.querySelector('.test-variant-text.D')
};

let question_data = [
    {
        question: "1. 1 yilda necha kun bor?",
        options: ["365 kun", "366 kun", "364 kun", "360 kun"]
    },
    {
        question: "2. 1 oyda necha kun bor?",
        options: ["30 kun", "31 kun", "28 yoki 29 kun", "32 kun"]
    },
    {
        question: "3. 1 kunda necha soat bor?",
        options: ["24 soat", "12 soat", "36 soat", "48 soat"]
    },
    {
        question: "4. 1 soatda necha daqiqa bor?",
        options: ["60 daqiqa", "50 daqiqa", "70 daqiqa", "80 daqiqa"]
    },
    {
        question: "5. 1 daqiqada necha soniya bor?",
        options: ["60 soniya", "50 soniya", "70 soniya", "80 soniya"]
    },
    {
        question: "6. 1 haftada necha kun bor?",
        options: ["7 kun", "6 kun", "8 kun", "9 kun"]
    },
    {
        question: "7. 'Dushanba' ingliz tilida qanday?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"]
    },
    {
        question: "8. 'Olma' ingliz tilida qanday aytiladi?",
        options: ["Apple", "Orange", "Banana", "Grapes"]
    },
    {
        question: "9. Nyutonning nechta qonuni bor?",
        options: ["3 ta", "2 ta", "4 ta", "5 ta"]
    },
    {
        question: "10. Nechta fasl bor?",
        options: ["4 ta", "3 ta", "5 ta", "6 ta"]
    },
    {
        question: "11. 1 faslda necha oy bor?",
        options: ["3 oy", "4 oy", "2 oy", "5 oy"]
    },
    {
        question: "12. 1 yilda necha oy bor?",
        options: ["12 oy", "10 oy", "11 oy", "13 oy"]
    },
    {
        question: "13. Yangi yil sanasi qaysi?",
        options: ["1-yanvar", "31-dekabr", "1-fevral", "1-mart"]
    },
    {
        question: "14. Navro'z bayrami qaysi oyda?",
        options: ["Mart", "Fevral", "Aprel", "May"]
    },
    {
        question: "15. 8-mart qanday kun?",
        options: ["Xalqaro xotin-qizlar kuni", "Navro'z", "Mustaqillik kuni", "Yangi yil"]
    }
];


let i = 0;

function updateQuestion(index) {
    p.textContent = question_data[index].question;
    variants.A.textContent = question_data[index].options[0];
    variants.B.textContent = question_data[index].options[1];
    variants.C.textContent = question_data[index].options[2];
    variants.D.textContent = question_data[index].options[3];
}

next.onclick = () => {
    i = (i + 1) % question_data.length;
    updateQuestion(i);
};

prev.onclick = () => {
    i = (i - 1 + question_data.length) % question_data.length; 
    updateQuestion(i);
};

numbers.forEach((button, index) => {
    button.onclick = () => {
        i = index;
        updateQuestion(i);
    };
});