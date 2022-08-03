import React, { useState } from 'react'
import iterationImage from "./iteration-example.png"
import recursionExample from "./recursion-example.png"
import { Alert } from "@mui/material";

export default function quizSelectImage() {
    const [quizStart, setQuizStart] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(true)
    const [quizComplete, setQuizComplete] = useState(false)
    const [checkA, setCheckA] = useState(false)
    const [checkB, setCheckB] = useState(false)

    const restartQuiz = () => {
        setQuizStart(false)
        setQuizComplete(false)
        setCorrectAnswer(true)
    }

    const aClicked = () => {
        if (checkA) {
            document.getElementById("quiz2-img1").style.border = "none"
            setCheckA(false)
        } else {
            setCheckA(true)
            document.getElementById("quiz2-img1").style.border = "4px solid orange"
        }
    }
    const bClicked = () => {
        if (checkB) {
            document.getElementById("quiz2-img2").style.border = "none"
            setCheckB(false)
        } else {
            setCheckB(true)
            document.getElementById("quiz2-img2").style.border = "4px solid orange"
        }
    }

    const submitQuiz = () => {
        if (checkA && !checkB) {
            document.getElementById("quiz2-img1").style.border = "4px solid red"
            document.getElementById("quiz2-img2").style.border = "4px solid red"
            setCheckA(false)
            setCorrectAnswer(false)
        } else if (!checkA && checkB) {
            document.getElementById("quiz2-img1").style.border = "4px solid green"
            document.getElementById("quiz2-img2").style.border = "4px solid green"
            setCheckB(false)
            setCorrectAnswer(true)

        } else if (checkA && checkB) {
            document.getElementById("quiz2-img1").style.border = "4px solid red"
            document.getElementById("quiz2-img2").style.border = "4px solid red"
            setCheckA(false)
            setCheckB(false)
            setCorrectAnswer(false)
        }
        setQuizComplete(true)
    }

    const onStartClick = () => {
        setQuizStart(true)
    }

    if (!quizStart) {
        return (
            <div className="quiz start-screen box-shadow">
                <h1 className='black-text-color'>Select right Image Quiz</h1>
                <button className="start" onClick={onStartClick}>Start Quiz</button>
            </div>
        )
    }

    return (
        <div class="quiz box-shadow">
            <div class="quiz-header">
                <h2 class="question black-text-color">In this case, is it more efficient to use iteration or recursion
                    to calculate the faculty?</h2>
                <div>
                    <img id="quiz2-img1" onClick={(e) => aClicked(e)} src={recursionExample}
                        alt='recursion' />
                    <img id="quiz2-img2" onClick={(e) => bClicked(e)} src={iterationImage} alt='iteration' />
                </div>
            </div>
            {
                !correctAnswer ?
                    <Alert style={{ marginBottom: "5%" }} variant="filled" severity="warning">
                        In this case iteration would be more efficient!
                    </Alert> : ""
            }
            {
                !quizComplete ?
                    <button type="submit" id="submitInputQuiz" onClick={(e) => submitQuiz(e)}>Check result</button>
                    :
                    <button type="submit" id="restartInputQuiz" onClick={(e) => restartQuiz(e)}>Restart Quiz</button>
            }
        </div>
    )
}
