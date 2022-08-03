import React, { useState } from 'react'
import "./singleChoice.css"

export default function quizTextInput(props) {
    const [quizStart, setQuizStart] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)
    const answers = ["ArrayList", "LinkedHashSet", "LinkedHashSet", "HashTable", "HashTable"];

    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [answer5, setAnswer5] = useState("")

    const restartQuiz = () => {
        setQuizStart(false)
        setAnswer1("")
        setAnswer2("")
        setAnswer3("")
        setAnswer4("")
        setAnswer5("")
        setQuizComplete(false)
    }

    const submitQuiz = (e) => {
        e.preventDefault()
        if (answer1.toLowerCase() === answers[0].toLowerCase()) {
            document.getElementById("q1").style.backgroundColor = "green"
            document.getElementById("q1").style.color = "#fff"
        } else if (answer1.toLowerCase() !== answers[0].toLowerCase()) {
            document.getElementById("q1").style.backgroundColor = "red"
            document.getElementById("q1").style.color = "#fff"
            setAnswer1(answers[0])
        }

        if (answer2.toLowerCase() === answers[1].toLowerCase()) {
            document.getElementById("q2").style.backgroundColor = "green"
            document.getElementById("q2").style.color = "#fff"
        } else if (answer2.toLowerCase() !== answers[1].toLowerCase()) {
            document.getElementById("q2").style.backgroundColor = "red"
            document.getElementById("q2").style.color = "#fff"
            setAnswer2(answers[1])
        }
        if (answer3.toLowerCase() === answers[2].toLowerCase()) {
            document.getElementById("q3").style.backgroundColor = "green"
            document.getElementById("q3").style.color = "#fff"
        } else if (answer3.toLowerCase() !== answers[2].toLowerCase()) {
            document.getElementById("q3").style.backgroundColor = "red"
            document.getElementById("q3").style.color = "#fff"
            setAnswer3(answers[2])
        }
        if (answer4.toLowerCase() === answers[3].toLowerCase()) {
            document.getElementById("q4").style.backgroundColor = "green"
            document.getElementById("q4").style.color = "#fff"
        } else if (answer4.toLowerCase() !== answers[3].toLowerCase()) {
            document.getElementById("q4").style.backgroundColor = "red"
            document.getElementById("q4").style.color = "#fff"
            setAnswer4(answers[3])
        }
        if (answer5.toLowerCase() === answers[4].toLowerCase()) {
            document.getElementById("q5").style.backgroundColor = "green"
            document.getElementById("q5").style.color = "#fff"
        } else if (answer5.toLowerCase() !== answers[4].toLowerCase()) {
            document.getElementById("q5").style.backgroundColor = "red"
            document.getElementById("q5").style.color = "#fff"
            setAnswer5(answers[4])
        }
        setQuizComplete(true)
    }
    const onStartClick = () => {
        setQuizStart(true)
    }

    if (!quizStart) {
        return (
            <div className="quiz start-screen box-shadow">
                <h1 className='black-text-color'>{props.introduction}</h1>
                <button className="start" onClick={onStartClick}>Start Quiz</button>
            </div>
        )
    }
    return (
        <div className="quiz box-shadow">
            <form id="inputQuiz" style={{ width: "100%" }}>
                <div class="quiz-header">
                    <h2 class="question black-text-color">Please fill in the correct answers</h2>
                    <p class="grey-text-color">Imagine that the following data structures have thousands of
                        entries. </p>
                    <ol class="quiz3-ol" style={{ fontSize: "1rem" }}>
                        <li className="black-text-color">
                            <p class="black-text-color" style={{ fontWeight: "bold" }}>
                                Which List type would you use to perform
                                the add function most energetically efficient?
                            </p>
                            List&#60;String&#62; myList = new <input id="q1"
                                value={answer1}
                                onChange={(e) => setAnswer1(e.target.value)}
                                type="text" />&#60;&#62;();
                            <br />
                            myList.add("Dog");
                        </li>
                        <li className="black-text-color">
                            <p class="black-text-color" style={{ fontWeight: "bold" }}>
                                Which Set type would you use to perform
                                the contains function most energetically efficient?
                            </p>
                            <input id="q2"
                                value={answer2}
                                onChange={(e) => setAnswer2(e.target.value)}
                                type="text" />&#60;String&#62; mySet = new <input id="q3"
                                    value={answer3}
                                    type="text"
                                    onChange={(e) => setAnswer3(e.target.value)} />&#60;&#62;();
                            <br />
                            mySet.contains("Dog");
                        </li>
                        <li className="black-text-color">
                            <p class="black-text-color" style={{ fontWeight: "bold" }}>
                                Which Map type would you use to
                                perform
                                the add function most energetically efficient?
                            </p>
                            <input class="black-text-color" value={answer4}
                                onChange={(e) => setAnswer4(e.target.value)} id="q4"
                                type="text" />&#60;String, String&#62; myMap = new
                            <input id="q5"
                                type="text" value={answer5}
                                onChange={(e) => setAnswer5(e.target.value)} />&#60;&#62;();
                            <br />
                            myMap.get("Cat");
                        </li>
                    </ol>
                </div>
                {
                    !quizComplete ?
                        <button type="submit" id="submitInputQuiz" onClick={(e) => submitQuiz(e)}>Check result</button>
                        :
                        <button type="submit" id="submitInputQuiz" onClick={(e) => restartQuiz(e)}>Restart Quiz</button>
                }
            </form>
        </div>
    )
}
