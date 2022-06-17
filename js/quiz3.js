var answers = {
    "q1": ["organizing", "processing", "retriving", "storing"],
    "q2": ["joule"],
    "q3": ["30"],
    "q4": ["saturday"]
};

function markAnswers() {
    $("input[type='text']").each(function () {
        console.log($.inArray(this.value, answers[this.id]));
        if ($.inArray(this.value.toLowerCase(), answers[this.id]) === -1) {
            $(this).css("backgroundColor", " red");
        } else {
            $(this).css("backgroundColor", " green");
        }
    })
}

$("#inputQuiz").on("submit", function (e) {
    e.preventDefault();
    markAnswers();
});