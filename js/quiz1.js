const quizData = [
    {
        question: "You have a list of elements and you want to add a new one. What would you use?",
        a: "ArrayList",
        b: "LinkedList",
        c: "Vector",
        d: "Stack",
        correct: "a",
    },
    {
        question: "Why is it important to use the right data structure?",
        a: "Worse runtime",
        b: "More energy consumption",
        c: "Better runtime",
        d: "All apply",
        correct: "c",
    },
    {
        question: "What is the unit of energy consumption calculation?",
        a: "Joule",
        b: "Watt",
        c: "Hertz",
        d: "Ampere",
        correct: "a",
    },
    {
        question: "What applies when measuring energy consumption of data structures?",
        a: "It depends on your usecase",
        b: "measurements are identical",
        c: "ArrayList is always superior",
        d: "none of the above",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz1')
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
    questionNumber.innerText = 'Question ' + (currentQuiz + 1) + ' / ' + quizData.length
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
            <div class="black-text-color" style="position: relative; transform: translateY(-50%); top: 50%;">
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
               <button onclick="location.reload()">Reload</button>
               </div>
               `
        }
    }
})