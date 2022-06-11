// Dieser Code ist für den Dark-Mode funktioniert aber noch nicht ganz


// $("#darkMode").click(function () {

//     $("#darkMode").text("Light Mode");
//     $(".colored-section").css("backgroundColor", "#303030");
//     $(".white-section").css("backgroundColor", "black");
//     $("p").css("color", "white");
//     $(".section-heading").css("color", "white");
//     $("h3").css("color", "white");
//     $(".skills-image").css("color", "white");
//     $("a").css("color", "white");
//     $(".btn-success").css("backgroundColor", "black");
//     $(".btn-success").css("borderColor", "white");


// });
const quizData = [
    {
        question: "Why is green coding a relevant topic?",
        a: "Develop efficienter programs",
        b: "I dont know",
        c: "Green is a better color",
        d: "Environmental protection ",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionNumber = document.getElementById('whichQuestion')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    questionNumber.innerText = 'Question ' + (currentQuiz+1) + ' / ' + quizData.length
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
               <button onclick="location.reload()">Reload</button>
               `
        }
    }
})






//_____________________ QUIZ 2 ____________
new Sortable(quizSort);
const correctAnswers = [
    "Python",
    "Java",
    "Swift",
    "C#",
    "C++",
];
function checkAnswer() {
    const li = document.querySelectorAll("#quizSort li");
    let answers = [];
    li.forEach(function (text) {
        answers.push(text.innerHTML);
    });
    if (JSON.stringify(correctAnswers) === JSON.stringify(answers)) {
        document.getElementById('quizSort-btn').textContent = "Correct :)";
        document.getElementById('quizSort-btn').style.backgroundColor = "green";


        // alert("Correct :)");
    } else {
        // alert("Try Again...");
        document.getElementById('quizSort-btn').textContent = "Try Again...";
        document.getElementById('quizSort-btn').style.backgroundColor = "red";
    }
}