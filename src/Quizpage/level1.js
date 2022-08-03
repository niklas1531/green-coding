import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import QuizSingleChoice from '../components/KPI-Pages/Quizze/quizSingleChoice'
import QuizIcon from '@mui/icons-material/Quiz';
import { capitalize } from "@mui/material";
import { Link } from "react-router-dom";

export default function Quiz() {
    const name = localStorage.getItem("name")
    const [displayQ, setDisplay] = useState('none')


    useEffect(() => {
        setDisplay(localStorage.getItem("displayQ"))
    }, [localStorage.getItem("displayQ")])

    return (
        <section className='beige-section' style={{ paddingTop: "15%", paddingBottom: "0", marginBottom: "5%" }}>
            <Navbar />
            <div className="container-fluid quiz-level-div" >
                <div>
                    <QuizIcon className='black-text-color' />
                    <h2 className="black-text-color">Level 1</h2>
                    <hr className="line" />
                </div>

                <QuizSingleChoice introduction={`Hi ${capitalize(name)}`} />

                <div className="btn-swipe-div">
                    <Link class="button-swipe" style={{ position: "absolute", left: "5%" }} smooth
                        to="/quiz"><i className="fa-solid fa-arrow-left-long"></i> Back to Quiz Page
                    </Link>

                    <Link class="button-swipe" id="second-level" style={{ position: "absolute", right: "5%", backgroundColor: "#28a745", display: (localStorage.getItem("level1Done") ? "block" : "none") }}
                        to="/quiz/level2"
                    >Next Level <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
            <Footer />
        </section>
    )

}

