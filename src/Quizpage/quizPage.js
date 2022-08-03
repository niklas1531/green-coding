/*This is the homepage of the quiz page, 
i.e. the page you see when you press "Quiz" via the navbar or the footer. */
import React from "react";
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import Header from '../components/KPI-Pages/Quizze/Quiz-Header'
import QuizHomePage from "./quiz-Homepage"
import '../quiz.css'
import '../Layout.css'

export default function quiz() {
    return (
        <div id="quiz">
            <Navbar />
            <Header />
            <QuizHomePage />
            <Footer />
        </div>
    )
}
