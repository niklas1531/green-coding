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
                        <li className="black-text-color">Agrahari, V., & Chimalakonda, S. (2020). <strong>Refactor4Green: A game for novice programmers to learn code smells.</strong>
                            In Proceedings of the ACM/IEEE 42nd International Conference on Software Engineering: Companion Proceedings (pp. 324–325). Association for Computing Machinery.
                            <a className="kpi-text-link" href="https://doi.org/10.1145/3377812.3390792" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1145/3377812.3390792</a>
                        </li>
                        <li className="black-text-color">Baek, W., & Chilimbi, T. M. (2010). <strong>Green: A framework for supporting energy-conscious programming using controlled approximation. </strong>
                            Proceedings of the 31st ACM SIGPLAN Conference on Programming Language Design and Implementation, 198–209.
                            <a className="kpi-text-link" href="https://doi.org/10.1145/1806596.1806620" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1145/1806596.1806620</a>
                        </li>
                        <li className="black-text-color">Barcelos, R., & Travassos, G. (2006).<strong>Evaluation Approaches for Software Architectural Documents: A Systematic Review. </strong>
                            (p. 446).
                        </li>
                        <li className="black-text-color">Goaër, O. L. (2020).<strong>Enforcing green code with Android</strong>, int. In Proceedings of the 35th IEEE/ACM International Conference on Automated Software Engineering Workshops (pp. 85–90). Association for Computing Machinery.
                            <a className="kpi-text-link" href="https://doi.org/10.1145/3417113.3422188" rel="noopener noreferrer" target="_blank">https://doi.org/10.1145/3417113.3422188</a>
                        </li>
                        <li className="black-text-color">
                            Guamán, D., Pérez, J., Valdiviezo-Diaz, P., & Canas, N. (2022).
                            <strong>Estimating the energy con- sumption of software components from size, complexity and code smells metrics.</strong>
                            Proceed- ings of the 37th ACM/SIGAPP Symposium on Applied Computing, 1456–1459.
                            <a className="literature-link" href="https://doi.org/10.1145/3477314.35073538" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3477314.3507353</a>
                        </li>
                        <li className="black-text-color">
                            Koziolek, H. (2011).
                            <strong>Sustainability evaluation of software architectures: A systematic re- view.</strong>
                            Proceedings of the Joint ACM SIGSOFT Conference -- QoSA and ACM SIGSOFT Symposium -- ISARCS on Quality of Software Architectures -- QoSA and Architecting Critical Systems -- ISARCS, 3–12.
                            <a className="literature-link" href="https://doi.org/10.1145/2000259.2000263" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/2000259.2000263</a>
                        </li>
                        <li className="black-text-color">
                            Manotas, I., Pollock, L., & Clause, J. (2014). SEEDS:
                            <strong>A software engineer’s energy-opti- mization decision support framework. </strong>
                            Proceedings of the 36th International Conference on Software Engineering, 503–514.
                            <a className="literature-link" href="https://doi.org/10.1145/2568225.2568297" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/2568225.2568297</a>
                        </li>
                        <li className="black-text-color">
                            Munoz, D.-J. (2017). A
                            <strong>Achieving energy efficiency using a Software Product Line Approach. </strong>
                            Proceedings of the 21st International Systems and Software Product Line Conference - Vol- ume B, 131–138.
                            <a className="literature-link" href="https://doi.org/10.1145/3109729.3109744" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3109729.3109744</a>
                        </li>
                        <li className="black-text-color">
                            Munoz, D.-J., Pinto, M., & Fuentes, L. (2017).
                            <strong>Green software development and research with the HADAS toolkit. </strong>
                            Proceedings of the 11th European Conference on Software Archi- tecture: Companion Proceedings, 205–211.
                            <a className="literature-link" href="https://doi.org/10.1145/3129790.3129818" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3129790.3129818</a>
                        </li>
                        <li className="black-text-color">
                            Munoz, D.-J., Pinto, M., & Fuentes, L. (2018).
                            <strong>Finding correlations of features affecting energy consumption and performance of web servers using the HADAS eco-assistant. Com- puting,</strong>
                            100(11), 1155–1173.
                            <a className="literature-link" href="https://doi.org/10.1007/s00607-018-0632-7" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s00607-018-0632-7</a>
                        </li>
                        <li className="black-text-color">
                            Noureddine, A., Bourdon, A., Rouvoy, R., & Seinturier, L. (2012).
                            <strong>A preliminary study of the impact of software engineering on GreenIT. </strong>
                            Proceedings of the First International Workshop on Green and Sustainable Software, 21–27.
                        </li>
                        <li className="black-text-color">
                            Pereira, R., Couto, M., Saraiva, J., Cunha, J., & Fernandes, J. P. (2016).
                            <strong>The influence of the Java collection framework on overall energy consumption. </strong>
                            Proceedings of the 5th Interna- tional Workshop on Green and Sustainable Software, 15–21.
                            <a className="literature-link" href="https://doi.org/10.1145/2896967.2896968" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/2896967.2896968</a>
                        </li>
                        <li className="black-text-color">
                            Pereira, R., Simão, P., Cunha, J., & Saraiva, J. (2018). jStanley:
                            <strong>Placing a green thumb on Java collections. </strong>
                            In Proceedings of the 33rd ACM/IEEE International Conference on Auto- mated Software Engineering (pp. 856–859). Association for Computing Machinery.
                            <a className="literature-link" href="https://doi.org/10.1145/3238147.3240473" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3238147.3240473</a>
                        </li>
                        <li className="black-text-color">
                            Valiev, M., Vasilescu, B., & Herbsleb, J. (2018).
                            <strong>Ecosystem-level determinants of sustained activity in open-source projects: A case study of the PyPI ecosystem. </strong>
                            Proceedings of the 2018 26th ACM Joint Meeting on European Software Engineering Conference and Sympo-
                            sium on the Foundations of Software Engineering, 644–655.
                            <a className="literature-link" href="https://doi.org/10.1145/3236024.3236062" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3236024.3236062</a>
                        </li>

                        <li className="black-text-color">
                            Venters, C. C., Seyff, N., Becker, C., Betz, S., Chitchyan, R., Duboc, L., McIntyre, D., & Penzenstadler, B. (2017).
                            <strong>Characterising sustainability requirements: A new species, red herring, or just an odd fish? </strong>
                            Proceedings of the 39th International Conference on Software Engineering: Software Engineering in Society Track, 3–12.
                            <a className="literature-link" href="https://doi.org/10.1109/ICSE- SEIS.2017.2" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/ICSE- SEIS.2017.2</a>
                        </li>
                        <li className="black-text-color">
                            Zhu, H. S., Lin, C., & Liu, Y. D. (2015).
                            <strong>A programming model for sustainable software. </strong>
                            Proceedings of the 37th International Conference on Software Engineering - Volume 1, 767– 777.
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Literature;
