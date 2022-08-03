import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import "./kpi.css"
import "./tables/table.css"
import Welcome from './welcome'
import QuizDatastructures from './Quizze/QuizDatastructures'
import Lists from './tables/lists'
import Sets from './tables/sets'
import Maps from './tables/maps'
import CarouselItem from "./carouselItem";
import SwipeButtons from "./SwipeButtons";

export default function Datastructures() {
    return (
        <div id='datastructures'>
            <Navbar />
            <Welcome />
            <section className="grey-section kpi-content">
                <div>
                    <i className="fa-solid fa-sitemap black-text-color"></i>
                    <h2 className="black-text-color">Data Structures</h2>
                    <hr className="line" />
                    <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-1">
                        <div style={{ width: "100%" }}>
                            <h2 className="black-text-color">What is a data structure?</h2>
                            <div className="carousel-part">
                                <a className="" type="button" href="#carousel" data-slide="prev">
                                    <i className="fa-solid fa-angle-left black-text-color"></i>
                                </a>
                                <div>
                                    <div id="carousel" className="carousel slide" data-ride="false">
                                        <div className="carousel-inner">
                                            <CarouselItem active="carousel-item active " content="A data structure is a format for organizing, processing, retrieving,
                                                    and storing
                                                    data."/>
                                            <CarouselItem active="carousel-item" content="It is an important concept as it allows to access and work with data
                                                    appropriately."/>
                                            <CarouselItem active="carousel-item" content="Each data structure contains information about the data values,
                                                    relationships
                                                    between
                                                    the data, and (in some cases) functions that can be applied to the
                                                    data (e.g.,
                                                    sort
                                                    the
                                                    data or add
                                                    specific
                                                    values)."/>
                                            <CarouselItem active="carousel-item"
                                                content="Each data structure contains information about the data
                                                    values, relationships
                                                    between
                                                    the data, and (in some cases) functions that can be applied to the
                                                    data
                                                    (e.g.,
                                                    sort
                                                    the
                                                    data or add
                                                    specific
                                                    values)."/>
                                            <CarouselItem active="carousel-item" content="Most modern programming languages have built-in data structures
                                                    to choose from
                                                    (e.g.,
                                                    Arrays, Lists,
                                                    Maps, Sets, etc.)."/>
                                            <CarouselItem active="carousel-item" content="A reasonable choice of the data structure is very dependent on
                                                    the problem you
                                                    are
                                                    dealing
                                                    with
                                                    (e.g., what data will be stored, which operations should the
                                                    data structure
                                                    provide,
                                                    etc.)."/>
                                        </div>
                                    </div>
                                </div>
                                <a type="button" href="#carousel" data-slide="next">
                                    <i className="fa-solid fa-angle-right black-text-color"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-2">
                        <div style={{ width: "100%" }}>
                            <h2 class="black-text-color">What do data structures have to do with green code?</h2>
                            <div class="carousel-part">
                                <a class="" type="button" href="#carousel2" data-slide="prev">
                                    <i class="fa-solid fa-angle-left black-text-color"></i>
                                </a>
                                <div>
                                    <div id="carousel2" class="carousel slide" data-ride="false">
                                        <div class="carousel-inner">
                                            <CarouselItem active="carousel-item active" content="A poor choice of the data structure in terms that it is not suitable
                                                    for the
                                                    data, the operations you want to perform on the data, and the
                                                    program can cause
                                                    severe drawbacks in the energy consumption, and thus the energy
                                                    efficiency of your program."/>
                                            <CarouselItem active="carousel-item" content="A study from Pereira and colleagues in 2016 showed that an
                                                    appropriate choice
                                                    of the data structure can improve the energy consumption by up to
                                                    11%."/>
                                        </div>
                                    </div>
                                </div>
                                <a type="button" href="#carousel2" data-slide="next">
                                    <i class="fa-solid fa-angle-right black-text-color"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid kpi2-item-box box-shadow" id="kpi1-ds-3">
                        <div style={{ width: "100%" }}>
                            <h2 class="black-text-color">How can I measure the quality of a data structure with regards
                                to energy
                                efficiency?</h2>
                            <div class="carousel-part">
                                <a class="" type="button" href="#carousel3" data-slide="prev">
                                    <i class="fa-solid fa-angle-left black-text-color"></i>
                                </a>
                                <div>
                                    <div id="carousel3" class="carousel slide" data-ride="false"
                                        data-bs-interval="false">
                                        <div class="carousel-inner">
                                            <CarouselItem active="carousel-item active" content="As there are many different programming languages and data
                                                    structures, an
                                                    assessment must always be made on a case-by-case basis."/>
                                            <CarouselItem active="carousel-item" content={<>Nevertheless, there are two ways of easily assessing the energy
                                                consumption of
                                                your data structures when using the Java Collection Framework.
                                                <br />
                                                <a class="kpi-text-link"
                                                    href="https://dzone.com/articles/java-collection-performance"
                                                    target="_blank" rel="noopener noreferrer"> Click
                                                    here</a> to learn more about Java Collection
                                                Performance, a framework
                                                that provides code (i.e., an interface) for testing the
                                                performance of other
                                                data structures on your own.</>} />

                                        </div>
                                    </div>
                                </div>
                                <a type="button" href="#carousel3" data-slide="next">
                                    <i class="fa-solid fa-angle-right black-text-color"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 className="black-text-color" id="energy-consumption-tables">Example</h3>
                    <hr className="line" />
                    <p className='black-text-color'>Energy consumption tables</p>

                    <p className="black-text-color container-fluid">As an example, the energy consumption of several operations on
                        lists, sets and maps is shown when using 25k string values</p>
                    <p className="grey-text-color">(Press the buttons to hide or show columns)</p>

                    <div className="container-table" style={{ marginTop: "3%" }}>
                        <Lists />
                        <Sets />
                        <Maps />

                        <p className="black-text-color">
                            Pereira, R., Couto, M., Saraiva, J., Cunha, J., & Fernandes, J. P. (2016). The influence of
                            the Java
                            collection framework on overall energy consumption. Proceedings of the 5th International
                            Workshop on Green
                            and Sustainable Software, 15–21. <a className="kpi-text-link"
                                href="https://doi.org/10.1145/2896967.2896968"
                                target="_blank"
                                rel="noopener noreferrer">https://doi.org/10.1145/2896967.2896968</a>
                        </p>
                    </div>
                </div>
            </section>
            <QuizDatastructures />
            <SwipeButtons prev="/kpis/maintainability/#" next="/kpis/iterativeRecursive/#" />
            <Footer />
        </div>
    )
}
