/* This is the page where you can find our literature used at this website. */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "./literature.css"

function Literature() {
    return (
        <div>
            <Navbar />
            <section className="beige-section" style={{ marginTop: "5%" }}>
                <div className="container-fluid">
                    <i className="fas fa-book-open black-text-color"></i>
                    <h1 className="black-text-color">Literature</h1>
                    <hr className="line" />

                    <ol className="literature-list" style={{ textAlign: "left" }}>
                        <li className="black-text-color">Baek, W., & Chilimbi, T. M. (2010). <strong>Green: A framework for supporting energy-conscious
                            programming using controlled approximation.</strong> Proceedings of the 31st ACM SIGPLAN Conference
                            on Programming Language Design and Implementation, 198–209.
                            <a className="kpi-text-link" href="https://doi.org/10.1145/1806596.1806620" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1145/1806596.1806620</a>
                        </li>
                        <li className="black-text-color">Guamán, D., Pérez, J., Valdiviezo-Diaz, P., & Canas, N. (2022). <strong>Estimating the energy
                            consumption of software components from size, complexity and code smells metrics.</strong>
                            Proceedings of the 37th ACM/SIGAPP Symposium on Applied Computing, 1456–1459.
                            <a className="kpi-text-link" href="https://doi.org/10.1145/3477314.3507353" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1145/3477314.3507353</a>
                        </li>
                        <li className="black-text-color">A. Noureddine, A. Bourdon, R. Rouvoy and L. Seinturier, <strong>"A preliminary study of the
                            impact of software engineering on GreenIT"</strong>, 2012 First International Workshop on Green and
                            Sustainable Software (GREENS), 2012, pp. 21-27, <a className="kpi-text-link" href="https://doi.org/10.1109/GREENS.2012.6224251" rel="noopener noreferrer" target="_blank">https://doi.org/10.1109/GREENS.2012.6224251</a>
                        </li>
                        <li className="black-text-color">Pereira, R., Couto, M., Saraiva, J., Cunha, J., & Fernandes, J. P. (2016). <strong>The influence
                            of the Java collection framework on overall energy consumption.</strong> Proceedings of the 5th
                            International Workshop on Green and Sustainable Software, 15–21.
                            <a className="literature-link" href="https://doi.org/10.1145/2896967.2896968" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/2896967.2896968</a>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Literature;