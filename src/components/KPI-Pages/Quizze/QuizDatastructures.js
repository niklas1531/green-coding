import React from 'react'
import QuizTextInput from './quizTextInput'
import DataStructureSingleChoice from "./DataStructure-Quiz";

export default function QuizDatastructures() {
    return (
        <section id="quiz-section" class=" beige-section quiz-section">
            <div class="container-fluid">
                <h1 class="black-text-color"> Test yourself!</h1>
                <hr class="line" />
                <section class=" row">
                    <div className='col-lg-12'>
                        <DataStructureSingleChoice introduction="Single Choice Quiz" />
                    </div>
                    <div className="col-lg-12">
                        <QuizTextInput introduction="Text Input Quiz" />
                    </div>
                </section>
            </div>
        </section>
    )
}