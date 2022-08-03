import React from 'react'
import "./singleChoice.css"
const { useState, useEffect, Fragment } = React

export default function CodeSizeSingleChoice(props) {
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
            question: "How can one measure code size?",
            answers: ["Lines of code", "Number of words", "Iteration/Recursion", "None of the above"],
            correctAnswerIndex: 0
        },
        {
            question: "Code size influences software quality?",
            answers: ["false", "true"],
            correctAnswerIndex: 1
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
                                {resultPercent >= 75 ? "Congratulations you did it!" : "Too bad, maybe you'll make it next time."}
                            </h1>
                            <p className='black-text-color' style={{
                                lineHeight: "1.5em",
                                margin: "0 0 6px 0"
                            }}>You answered {correctAnswerCount} questions correctly out
                                of {questions.length} questions</p>
                        </Fragment>
                    ) : (
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
                    )}

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



