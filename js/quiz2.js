//_____________________ QUIZ 2 ____________
new Sortable(quizSort);
const correctAnswers = [
    "ArrayList",
    "Stack",
    "RoleList",
    "Vector",
    "LinkedList",
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
    } else {
        document.getElementById('quizSort-btn').textContent = "Try Again...";
        document.getElementById('quizSort-btn').style.backgroundColor = "red";
    }
}
