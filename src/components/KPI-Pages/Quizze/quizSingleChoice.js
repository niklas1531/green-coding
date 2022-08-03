import React from 'react'
import "./singleChoice.css"
import "../../../Layout.css"
import { Link } from "react-router-dom";
const { useState, useEffect, Fragment } = React

export default function quizSingleChoice(props) {

    const Question = ({ question, setAnswerStatus }) => {
        const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

        useEffect(() => {
            if (selectedAnswerIndex != null) {
                setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex)
            }
        }, [selectedAnswerIndex])

        useEffect(() => {
            setSelectedAnswerIndex(null)
        }, [question])

        const getClasses = (index) => {
            let classes = []
            if (selectedAnswerIndex != null) {
                if (selectedAnswerIndex === index) {
                    classes.push("selected")
                }
                if (index === question.correctAnswerIndex) {
                    if (selectedAnswerIndex === index) {
                        classes.push("correct")
                    } else {
                        classes.push("incorrect")
                    }
                }
            }
            return classes.join(" ")
        }

        return (
            <div className="question">
                <div className="questionText black-text-color">{question.question}</div>
                <div className="answers">
                    {question.answers.map((answer, index) => {
                        return <div key={index} className={`answer ${getClasses(index)}`}
                            onClick={() => selectedAnswerIndex == null && setSelectedAnswerIndex(index)}>{answer}</div>
                    })}
                </div>
            </div>
        )
    }
    const questions = [
        {
            question: "You have a list of elements and you want to add a new one. What would you use?",
            answers: ["ArrayList", "LinkedList", "Vector", "Stack"],
            correctAnswerIndex: 0
        },
        {
            question: "Any recursive algorithm can also be implemented iteratively",
            answers: ["true", "false"],
            correctAnswerIndex: 0
        },
        {
            question: "Why is it important to think about the way to implement the repeated execution of instructions?",
            answers: ["it is not important as long as it works", "to improve the energy efficiency", "There is nothing to consider, iteration is always better than recursion", "There is nothing to consider, recursion is always better than iteration"],
            correctAnswerIndex: 1
        },
        {
            question: "When implementing an algorithm for the \"Tower of Hanoi\" problem in C++?",
            answers: ["recursion is more efficient than iteration", "iteration is more efficient than recursion", "both are equaly efficient"],
            correctAnswerIndex: 0
        },
        {
            question: "Whether to use iteration or recursion is dependent on .. ?",
            answers: ["nothing. You can decide, what you prefer", "problem and programming language", "data types"],
            correctAnswerIndex: 1
        },
        {
            question: "What influences the maintainability of open source projects?",
            answers: ["number of contributors, Upstream dependencies, downstream dependencies", "number of commits,number of contributors, Upstream dependencies, downstream dependencies", "number of commits, Upstream dependencies, downstream dependencies, code size", "None of the above"],
            correctAnswerIndex: 1
        },
        {
            question: "Early and late stage commits have a lower chance of becoming dormant?",
            answers: ["false", "true"],
            correctAnswerIndex: 0
        },
        {
            question: "Downstream dependencies have a positive effect on the sustainability of a project?",
            answers: ["true", "false"],
            correctAnswerIndex: 0
        },
        {
            question: "What applies when measuring energy consumption of data structures?",
            answers: ["It depends on your usecase", "measurements are identical", "ArrayList is always superior"],
            correctAnswerIndex: 0
        },
        {
            question: "The more contributors there are, the lower the chance of a project becoming dormant?",
            answers: ["false", "true"],
            correctAnswerIndex: 1
        },
        {
            question: "Having less upstream dependencies allows for more reuse in the long run?",
            answers: ["true", "false"],
            correctAnswerIndex: 1
        },
        {
            question: "Why is it important to use the right data structure?",
            answers: ["Worse runtime", "More energy consumption", "Better runtime", "All apply"],
            correctAnswerIndex: 2
        },
        {
            question: "What is the unit of energy consumption calculation?",
            answers: ["Joule", "Watt", "Hertz", "Ampere"],
            correctAnswerIndex: 0
        },
        {
            question: "How can one measure code size?",
            answers: ["Lines of code", "Number of words", "Iteration/Recursion", "None of the above"],
            correctAnswerIndex: 0
        },
        {
            question: "Code size influences software quality?",
            answers: ["false", "true"],
            correctAnswerIndex: 1
        },
        {
            question: "Maintainability can ease the ... code?",
            answers: ["repair, modification, understanding", "implementation", "readability", "none of the above"],
            correctAnswerIndex: 0
        }
    ]
    const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
        const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100

        return <div className="progressBar">
            <div className="text ">{currentQuestionIndex} out of {totalQuestionsCount} questions</div>
            <div className="inner" style={{ width: `${progressPercentage}%` }} />
        </div>
    }
    const Quiz = ({ questions }) => {
        const [questionIndex, setQuestionIndex] = useState(null)
        const [answerStatus, setAnswerStatus] = useState(null)
        const [resultPercent, setResultPercent] = useState(null)
        const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
        const [quizComplete, setQuizComplete] = useState(false)

        useEffect(() => {
            setAnswerStatus(null)
        }, [questionIndex])

        useEffect(() => {
            if (answerStatus) {
                setCorrectAnswerCount(count => count + 1)
            }
        }, [answerStatus])

        const onNextClick = () => {
            if (questionIndex === questions.length - 1) {
                setQuizComplete(true)
                setResultPercent((correctAnswerCount / questions.length) * 100)
            } else {
                setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1)
            }
        }

        const onRestartClick = () => {
            setQuizComplete(false)
            setQuestionIndex(null)
            setCorrectAnswerCount(0)
        }
        if (questionIndex == null) {
            return (
                <div className="quiz start-screen box-shadow">
                    <h1 className='black-text-color'>{props.introduction}</h1>
                    <p className="black-text-color">To pass this test, you must answer at least 75% of the questions
                        correctly.</p>
                    <button className="start" onClick={onNextClick}>Start Quiz</button>
                </div>
            )
        }
        return (
            <div className="quiz box-shadow">
                {
                    quizComplete ? (
                        <Fragment>
                            <h1 className='black-text-color' style={{ margin: "20px 0" }}>
                                {resultPercent >= 75 ? "Good Job, you can move on to the next level!" : "You can do better, please try again to move on!"}
                                {(resultPercent >= 75 ? localStorage.setItem("level1Done", "true") : null)}
                            </h1>
                            {resultPercent >= 75 ? <Link className="kpi-text-link" to="/quiz/level2">Level 2</Link> : ""}
                            <p className='black-text-color' style={{
                                lineHeight: "1.5em",
                                margin: "0 0 6px 0"
                            }}>You answered {correctAnswerCount} questions correctly out
                                of {questions.length} questions</p>
                        </Fragment>
                    ) :
                        <Fragment>
                            <ProgressBar currentQuestionIndex={questionIndex} totalQuestionsCount={questions.length} />
                            <Question
                                question={questions[questionIndex]}
                                setAnswerStatus={setAnswerStatus}
                            />
                            {answerStatus != null && (
                                <div>
                                    <div
                                        className="answerStatus black-text-color">{!!answerStatus ? "Correct! " : "Your answer was incorrect"}</div>
                                    <button className="next black-text-color" onClick={onNextClick}>
                                        {questionIndex === questions.length - 1 ? "See your results" : "Next Question"}
                                    </button>
                                </div>
                            )}
                        </Fragment>
                }
                {questionIndex != null && <button className="restart" onClick={onRestartClick}>Restart quiz</button>}
            </div>
        )
    }
    return (
        <div>
            <Quiz questions={questions} />
        </div>
    )
}



