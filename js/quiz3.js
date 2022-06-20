var answers = {
    "q1": ["arraylist"],
    "q2": ["linkedhashset"],
    "q3": ["linkedhashset"],
    "q4": ["hashtable"],
    "q5": ["hashtable"]
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