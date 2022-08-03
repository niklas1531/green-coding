import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import Welcome from './welcome'
import CarouselItem from "./carouselItem";
import "./kpi.css"
import SwipeButtons from "./SwipeButtons";
import CodeSizeSingleChoice from "./Quizze/Codesize-Quiz"

export default function Codesize() {
    return (
        <div id='codesize'>
            <Navbar />
            <Welcome />

            <section className="grey-section kpi-content">
                <div>
                    <i className="fa-solid fa-sitemap black-text-color"></i>
                    <h2 className="black-text-color">Code Size</h2>
                    <hr className="line" />
                </div>
                <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                    <div style={{ width: "100%" }}>
                        <h2 className="black-text-color">What is codesize?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel1" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel1" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active" content="Code size means the size of a program, measured by the size of the applications and the lines of code written." />

                                    </div>
                                </div>
                            </div>
                            <a type="button" href="#carousel1" data-slide="next">
                                <i className="fa-solid fa-angle-right black-text-color"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                    <div style={{ width: "100%" }}>
                        <h2 className="black-text-color">What does codesize have to do with green code?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel2" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel2" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active" content="The size of a code has an impact on the energy consumption of the code and thus also influences green coding." />

                                    </div>
                                </div>
                            </div>
                            <a type="button" href="#carousel2" data-slide="next">
                                <i className="fa-solid fa-angle-right black-text-color"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                    <div style={{ width: "100%" }}>
                        <h2 className="black-text-color">How can I measure the effect of codesize with regards to energy efficiency?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel3" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel3" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active" content="Code size falls under the category software quality, which can be measured by the size of a code along with its complexity and maintainability." />
                                        <CarouselItem active="carousel-item" content={<>
                                            To learn more about the mathematical model that comprises those variables, in particular code size, <a className="kpi-text-link" href="https://dl.acm.org/doi/10.1145/3477314.3507353" target="_blank" rel="noopener noreferrer">click here</a>
                                        </>} />
                                    </div>
                                </div>
                            </div>
                            <a type="button" href="#carousel3" data-slide="next" >
                                <i className="fa-solid fa-angle-right black-text-color"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grey-section kpi-content" style={{ paddingTop: "0" }}>
                <div className="container-fluid">
                    <h3 className="black-text-color" id="energy-consumption-tables">Example</h3>
                    <hr className="line" />
                    <p className="black-text-color">
                        Since the paper we linked above and that developed the mathematical model is very new (2022), real-world measurements are yet to be calculated.
                    </p>
                </div>
            </section>
            <section id="quiz-section" className=" beige-section quiz-section">
                <div className="container-fluid">
                    <h1 className="black-text-color"> Test yourself!</h1>
                    <hr className="line" />
                    <section className=" row">
                        <div className='col-lg-12'>
                            <CodeSizeSingleChoice introduction="Single Choice Quiz" />
                        </div>
                    </section>
                </div>
            </section>
            <SwipeButtons prev="/kpis/iterativeRecursive/#" next="/kpis/maintainability/#" />
            <Footer />
        </div>
    )
}

