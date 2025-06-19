const questions = [
    {
        question : "What is the capital of France?",
        answers : [
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false}
        ]
    },
    {
        question : "Which planet is called red planet?",
        answers : [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Mars", correct: true},
            {text: "Neptune", correct: false}
        ]
    },
    {
        question : "Who painted the famous artwork 'The Starry Night'?",
        answers : [
            {text: "Leonardo da Vinci", correct: false},
            {text: "Vincent van Gogh", correct: true},
            {text: "Pablo Picasso", correct: false},
            {text: "Claude Monet", correct: false}
        ]
    },
    {
        question : "Which programming language is often used for web development?",
        answers : [
            {text: "Java", correct: false},
            {text: "C++", correct: false},
            {text: "Python", correct: false},
            {text: "Javascript", correct: true}
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
}


function showQuestion(){
    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " + questions.length;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();