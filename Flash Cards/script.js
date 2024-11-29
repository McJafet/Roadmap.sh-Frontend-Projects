const questions = [
    {
        question: "What is 10 + 10?",
        answer: "20"
    },
    {
        question: "What is 30 + 30?",
        answer: "60"
    },
    {
        question: "What is 40 + 40?",
        answer: "80"
    },
    {
        question: "What is 50 + 50?",
        answer: "100"
    },
    {
        question: "What is 60 + 60?",
        answer: "120"
    },
    {
        question: "What is 70 + 70?",
        answer: "140"
    },
    {
        question: "What is 80 + 80?",
        answer: "160"
    },
    {
        question: "What is 90 + 90?",
        answer: "180"
    },
    {
        question: "What is 100 + 100?",
        answer: "200"
    },
    {
        question: "What is 110 + 110?",
        answer: "220"
    },
    {
        question: "What is 120 + 120?",
        answer: "240"
    },
    {
        question: "What is 130 + 130?",
        answer: "260"
    },
    {
        question: "What is 140 + 140?",
        answer: "280"
    },
    {
        question: "What is 150 + 150?",
        answer: "300"
    },
    {
        question: "What is 160 + 160?",
        answer: "320"
    },
    {
        question: "What is 170 + 170?",
        answer: "340"
    },
    {
        question: "What is 180 + 180?",
        answer: "360"
    },
    {
        question: "What is 190 + 190?",
        answer: "380"
    },
    {
        question: "What is 200 + 200?",
        answer: "400"
    },
    {
        question: "What is 210 + 210?",
        answer: "420"
    },
    {
        question: "What is 220 + 220?",
        answer: "440"
    },
    {
        question: "What is 230 + 230?",
        answer: "460"
    },
    {
        question: "What is 240 + 240?",
        answer: "480"
    },
    {
        question: "What is 250 + 250?",
        answer: "500"
    },
    {
        question: "What is 260 + 260?",
        answer: "520"
    },
    {
        question: "What is 270 + 270?",
        answer: "540"
    },
    {
        question: "What is 280 + 280?",
        answer: "560"
    },
    {
        question: "What is 290 + 290?",
        answer: "580"
    },
    {
        question: "What is 300 + 300?",
        answer: "600"
    },
    {
        question: "What is 310 + 310?",
        answer: "620"
    }
]
let cant = questions.length
let current = 0;


const questionCant = document.querySelector('.questions');
const questionText = document.querySelector('.question');
const answerButton = document.querySelector('.text-buttons');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const progressBar = document.querySelector('.progress');
const porcentText = document.querySelector('.porcent');


function showQuestion() {
    questionCant.textContent = `${current + 1} of ${cant}`;
    questionText.textContent = questions[current].question;
}
function barProgress() {
    let porcent = ((current + 1) / cant * 100).toFixed(0); 
    
    progressBar.style.width = `${porcent}%`;
    porcentText.textContent = `${porcent}%`;
}

showQuestion();
barProgress();

prevButton.addEventListener('click', () => {
    if (current > 0) {
        current--;
        showQuestion();
        barProgress();
        answerButton.textContent = 'Show Answer';
    }
})

nextButton.addEventListener('click', () => {
    if (current < cant - 1) {
        current++;
        showQuestion();
        barProgress();
        answerButton.textContent = 'Show Answer';
    }
})

answerButton.addEventListener('click', () => {
    if (answerButton.textContent === 'Show Answer') {
        questionText.textContent = '';
        questionText.textContent = questions[current].answer;
        answerButton.textContent = 'Hide Answer';
    }
    else {
        showQuestion();
        barProgress();
        answerButton.textContent = 'Show Answer';
    }
})


