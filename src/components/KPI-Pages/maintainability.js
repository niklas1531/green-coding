import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import Welcome from './welcome'
import CarouselItem from "./carouselItem";
import SwipeButtons from "./SwipeButtons";
import MaintainabilitySingleChoice from "./Quizze/Maintainability-Quiz";

export default function Maintainability() {
    return (
        <div id='maintainability'>
            <Navbar />
            <Welcome />

            <section className="grey-section kpi-content">
                <div>
                    <i className="fa-solid fa-sitemap black-text-color"></i>
                    <h2 className="black-text-color">Maintainability</h2>
                    <hr className="line" />
                </div>
                <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                    <div style={{ width: "100%" }}>
                        <h2 className="black-text-color">What is maintainability?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel1" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel1" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active"
                                            content="Software Maintainability is the ease of which one can repair, modify and understand the code. " />
                                        <CarouselItem active="carousel-item" content={<>
                                            Maintainability includes <br />
                                            <strong>Bug fixes, functionality, optimization, code adjustments</strong>
                                            <br />
                                            with the goal to prevent future issues</>} />

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
                        <h2 className="black-text-color">What does maintainability have to do with green code?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel2" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel2" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active" content={
                                            <>Green Coding is mainly determined by how sustainable a code is.<br />
                                                <i className="fas fa-arrow-alt-down"></i>
                                                Sustainability is in turn influenced by the quality of software
                                                architectures. <br />
                                                <i className="fas fa-arrow-alt-down"></i>
                                                Software architectures determine how maintainable a code is.</>} />
                                        <CarouselItem active="carousel-item"
                                            content="The software architectures determine how fast and correct a developer can understand, analyze, extend, test, and maintain software systems that drive sustainability (cost-efficient longevity) and evolvability" />
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
                        <h2 className="black-text-color">How can I measure maintainability with regards to energy
                            efficiency?</h2>
                        <div className="carousel-part">
                            <a className="" type="button" href="#carousel3" data-slide="prev">
                                <i className="fa-solid fa-angle-left black-text-color"></i>
                            </a>
                            <div>
                                <div id="carousel3" className="carousel slide" data-ride="false">
                                    <div className="carousel-inner">
                                        <CarouselItem active="carousel-item active"
                                            content="Maintainability of a system can be measured by its openness.A code's level of openness can be determined by whether it is open source or not." />
                                        <CarouselItem active="carousel-item"
                                            content={<>To measure the maintainability of an open source
                                                project following factors should be paid attention to:
                                                Number of commits <br />
                                                Number of contributors <br />
                                                Upstream dependencies <br />
                                                Downstream dependencies
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
                        Factors that influence the maintainability of open source projects are elaborated on in the
                        following table
                    </p>

                    <table className="table table-responsive table-bordered table-group-divider"
                        style={{ marginTop: "3%", marginLeft: "5%", marginRight: "5%", width: "90%" }}>
                        <thead style={{ width: "100%" }}>
                            <th className='black-text-color' style={{ width: "24%" }}>Number of Commits</th>
                            <th className='black-text-color' style={{ width: "24%" }}>Number of contributors</th>
                            <th className='black-text-color' style={{ width: "24%" }}>Upstream dependencies</th>
                            <th className='black-text-color' style={{ width: "24%" }}>Downstream dependencies</th>
                        </thead>
                        <tbody >
                            <tr>
                                <td className='black-text-color'>Early- and late-stage commits have higher chances of becoming dormant soon</td>
                                <td className='black-text-color'>The likelihood of a package becoming dormant is lower when there are more
                                    contributors.
                                </td>
                                <td className='black-text-color'>The upstream dependencies increase the chances of a project going dormant.</td>
                                <td className='black-text-color'>The downstream dependencies have a positive effect on the sustaina-bility of a
                                    project.
                                </td>
                            </tr>
                            <tr>
                                <td className='black-text-color'>Specialists indicate using recency of commits as the leading indicator of
                                    sustainability.
                                </td>
                                <td className='black-text-color'>The more contributors work on a project, the more sustainable the project.</td>
                                <td className='black-text-color'>In the long run, having more upstream dependencies allows for more reuse,
                                    compensating for dormancy risks
                                </td>
                                <td className='black-text-color'>Downstream dependencies come with various triage issues and con-sume more time
                                    regarding the effort put into the project to maintain its compatibility.
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <p className='black-text-color'>Valiev, M., Vasilescu, B., & Herbsleb, J. (2018). Ecosystem-level determinants of sus-tained activity in open-source projects: A case study of the PyPI ecosystem. Proceed-ings of the 2018 26th ACM Joint Meeting on European Software Engineering Con-ference and Symposium on the Foundations of Software Engineering, 644–655. <a className='kpi-text-link' href='https://doi.org/10.1145/3236024.3236062' target='_blank' rel="noopener noreferrer">https://doi.org/10.1145/3236024.3236062</a></p>
                </div>
            </section>
            <section id="quiz-section" className=" beige-section quiz-section">
                <div className="container-fluid">
                    <h1 className="black-text-color"> Test yourself!</h1>
                    <hr className="line" />
                    <section className=" row">
                        <div className='col-lg-12'>
                            <MaintainabilitySingleChoice introduction="Single Choice Quiz" />
                        </div>
                    </section>
                </div>
            </section>
            <SwipeButtons prev="/kpis/codesize/#" next="/kpis/datastructures/#" />
            <Footer />
        </div>
    )
}
