import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import Welcome from './welcome'
import CarouselItem from "./carouselItem";
import SwipeButtons from "./SwipeButtons";
import IterationImage from "./iteration:recursion-image.jpeg"
import IterativeRecursiveSingleChoice from "./Quizze/IterativeRecursive-Quiz";
import QuizSelectImage from "./Quizze/quizSelectImage";

export default function Iterativerecursive() {
    return (
        <div id='iterativeRecursive'>
            <Navbar />
            <Welcome />

            <section className="grey-section kpi-content">
                <div>
                    <i className="fa-solid fa-sitemap black-text-color"></i>
                    <h2 className="black-text-color">Iterative vs Recursive </h2>
                    <hr className="line" />
                </div>
                <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                    <div style={{ width: "100%" }}>
                        <h2 className="black-text-color">What is iterative and recursive?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel1" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel1" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active"
                                            content="Iteration and recursion are multiple executions of one or more instructions. " />
                                        <CarouselItem active="carousel-item"
                                            content="With recursion, your algorithm calls itself either directly or via other functions until a certain termination condition is reached." />
                                        <CarouselItem active="carousel-item"
                                            content="The iteration is realized by loops (e.g., for, while, etc.). The loop is terminated by a termination condition. " />
                                        <CarouselItem active="carousel-item"
                                            content="Any recursion can also be converted into an iterative solution and vice versa. " />
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
                        <h2 className="black-text-color">What does iterative/recursive have to do with green code?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel2" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel2" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active"
                                            content="In programming, a decision must be made depending on the application as to whether iteration or recursion is used. " />
                                        <CarouselItem active="carousel-item"
                                            content="If this decision is made incorrectly, it can lead to serious disadvantages in energy consumption, runtime, and thus the energy efficiency of your program." />
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
                        <h2 className="black-text-color">How can I measure the effect of iterative/recursive with
                            regards to energy efficiency?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel3" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel3" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active"
                                            content="The choice whether to use iteration or recursion depends on the problem you want to solve and the programming language in which you implement it." />
                                        <CarouselItem active="carousel-item"
                                            content="Even though iteration seems easier to implement for beginners, there are use cases where recursion consumes significantly less energy. " />
                                        <CarouselItem active="carousel-item" content={<>
                                            To learn more about how to measure the energy consumption of iterative and
                                            recursive approaches, we recommend the following research papers:
                                            <br />
                                            Green: A framework for supporting energy-conscious programming using
                                            controlled approximation. <a className="kpi-text-link"
                                                href="https://doi.org/10.1145/1806596.1806620"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            > Click here </a>

                                            <br />
                                            A preliminary study of the impact of software engineering on GreenIT <a
                                                className="kpi-text-link"
                                                href="https://ieeexplore.ieee.org/document/6224251" target="_blank" rel="noopener noreferrer"> Click
                                                here</a>

                                        </>} />
                                    </div>
                                </div>
                            </div>
                            <a type="button" href="#carousel3" data-slide="next">
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
                        To exemplify the differences between iteration and recursion, you can see below a bar chart
                        visualizing the differences when implementing the “Towers of Hanoi” problem
                        <br />
                        <a
                            className="kpi-text-link" href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" target="_blank" rel="noopener noreferrer">(click
                            here to read about the problem)</a> either iteratively or recursively
                        <br />
                        As you can see, the recursive algorithm performs much better regarding energy efficiency. It
                        consumes an average of 322.23 joules, while its iterative version consumed 1656.26 joules, an
                        increase of more than 400 %.
                    </p>
                    <img className="iterative-recursive-kpi-image" src={IterationImage} style={{ marginTop: "2%", marginBottom: "2%", border: "1px solid transparent", borderRadius: ".25rem" }} alt="iterative-recursive" />
                    <p className="black-text-color">
                        A. Noureddine, A. Bourdon, R. Rouvoy and L. Seinturier, "A preliminary study of the impact of software engineering on GreenIT," 2012 First International Workshop on Green and Sustainable Software (GREENS), 2012, pp. 21-27, <a className="kpi-text-link" target="_blank" href="https://doi.org/10.1109/GREENS.2012.6224251" rel="noopener noreferrer">doi: 10.1109/GREENS.2012.6224251</a>
                    </p>
                </div>
            </section>

            <section id="quiz-section" className=" beige-section quiz-section">
                <div className="container-fluid">
                    <h1 className="black-text-color"> Test yourself!</h1>
                    <hr className="line" />
                    <section className=" row">
                        <div className='col-lg-12'>
                            <IterativeRecursiveSingleChoice introduction="Single Choice Quiz" />
                        </div>
                        <div className="col-lg-12">
                            <QuizSelectImage />
                        </div>
                    </section>
                </div>
            </section>
            <SwipeButtons prev="/kpis/datastructures/#" next="/kpis/codesize/#" />
            <Footer />
        </div>
    )
}
