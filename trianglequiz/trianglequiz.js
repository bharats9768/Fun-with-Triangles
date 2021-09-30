const quizForm = document.querySelector(".quiz-form");
const  submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output-box");

const correctAnswer = ["90°", "right angled"];

function calculateScore (){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        if (value === correctAnswer[index])
        score = score + 1;
    } 
     score = score + 1;
     outputEl.innerText = "You'r score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);