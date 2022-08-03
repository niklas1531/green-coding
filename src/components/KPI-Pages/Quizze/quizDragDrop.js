import React from 'react'

export default function quizDragDrop() {
    return (
        <div class="quiz-container box-shadow">
            <div class="quiz-header">
                <h2 class="question black-text-color">In General: Which data structure is the most
                    efficient?</h2>
                <p class="grey-text-color">(Sort the list. Top=most efficient)</p>

                <ul id="sortable">

                    <li class="quizSort-li">ArrayList</li>
                    <li class="quizSort-li">LinkedList</li>
                    <li class="quizSort-li">Stack</li>
                    <li class="quizSort-li">Vector</li>
                    <li class="quizSort-li">RoleList</li>

                </ul>
            </div>
            <button id="quizSort-btn" onclick="checkAnswer()">Check Answer</button>
        </div>
    )
}
