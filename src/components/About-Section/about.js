// In this section there is a small info text which gives a short introduction about the project and the website.
import React from 'react'
import Tree from './tree.png'
import Earth from './earth-image.png'
import './about.css'
export default function about() {

    return (
        <section id="about" className='grey-section'>
            <div class="container-fluid">
                <h1 class="black-text-color">About</h1>
                <hr class="line" />
                <h3 class="about-welcome black-text-color">Welcome to Green Coding <span role="img" aria-label="welcome-emoji">&#127793;</span></h3>
                <div class="about-text about-desktop">

                    <p class="lead grey-text-color">Slow down and make yourself comfortable. Have a cup of tea <span role="img" aria-label="tea-emoji">&#127861;</span> or
                        coffee <span role="img" aria-label="coffee-emoji">&#9749;</span>
                        and then we can get started.</p>

                    <div class="text-part1">
                        <div class="text-part-1-text">
                            <p class="black-text-color">
                                So here you are. We, the green coding team are very happy to welcome you to our interactive
                                learning
                                platform.
                                We can’t wait to teach you all about green coding
                                We are four Information Systems students. We started our studies at the Technical University
                                in Munich (TUM)
                                in October 2019 and were assigned to the practical course “Designing IT-based learning”. We were
                                all
                                then chosen to
                                take part in the project offered by SAP UCC “Green Coding”.
                            </p>
                        </div>
                    </div>
                    <div class="text-part2">
                        <div class="about-emoji">
                            <img src={Earth} alt='earth' />
                        </div>
                        <div>
                            <p class="black-text-color">
                                Scientists have an almost unanimous
                                consensus that the
                                earth faces a catastrophic climate crisis (United Nations, 2020). A new trend is currently on
                                the
                                rise, which
                                addresses creating
                                sustainable information system management through green-IT. Green IT includes green coding,
                                which
                                addresses
                                measures that help the
                                development and operation of software sustainability. Unfortunately, Green Coding is still an
                                unresearched concept and,
                                therefore, still far from being accepted as best practice by programmers and companies.
                            </p>
                        </div>
                    </div>
                    <div class="text-part3">
                        <div>
                            <p class="black-text-color">
                                Our goal is
                                to raise awareness
                                among students and simplify the concept of green coding through defining Key Performance
                                Indicators
                                (KPIs) that can help
                                students code more efficiently while taking the energy consumption and environment
                                into
                                consideration.
                            </p>
                        </div>
                        <div class="about-emoji">
                            <img src={Tree} alt='tree' />
                        </div>
                    </div>


                </div>
                <div class="about-text about-mobile">
                    <details>
                        <summary>
                            Slow down and make yourself comfortable. Have a cup of tea <span role="img" aria-label='tea'>&#127861;</span>
                            or
                            coffee <span role="img" aria-label='coffee'>&#9749;</span>
                            and then we can get started.
                        </summary>
                        <div class="text-part1">
                            <div class="text-part-1-text">
                                <p class="black-text-color">
                                    So here you are. We, the green coding team are very happy to welcome you to our interactive
                                    learning
                                    platform.
                                    We can’t wait to teach you all about green coding
                                    We are four Information Systems students. We started our studies at the Technical University
                                    in Munich (TUM)
                                    in October 2019 and were assigned to the practical course “Designing IT-based learning”. We
                                    were
                                    all
                                    then chosen to
                                    take part in the project offered by SAP UCC “Green Coding”.
                                </p>
                            </div>
                        </div>
                        <div class="text-part2">
                            <div class="about-emoji">
                                <img src={Earth} alt="earth" />
                            </div>
                            <div>
                                <p class="black-text-color">
                                    Scientists have an almost unanimous
                                    consensus that the
                                    earth faces a catastrophic climate crisis (United Nations, 2020). A new trend is currently
                                    on
                                    the
                                    rise, which
                                    addresses creating
                                    sustainable information system management through green-IT. Green IT includes green coding,
                                    which
                                    addresses
                                    measures that help the
                                    development and operation of software sustainability. Unfortunately, Green Coding is still
                                    an
                                    unresearched concept and,
                                    therefore, still far from being accepted as best practice by programmers and companies.
                                </p>
                            </div>
                        </div>
                        <div class="text-part3">
                            <div>
                                <p class="black-text-color">
                                    Our goal is
                                    to raise awareness
                                    among students and simplify the concept of green coding through defining Key Performance
                                    Indicators
                                    (KPIs) that can help
                                    students code more efficiently while taking the energy consumption and environment
                                    into
                                    consideration.
                                </p>
                            </div>
                            <div class="about-emoji">
                                <img src={Tree} alt='tree' />
                            </div>
                        </div>
                    </details>

                </div>
            </div>
        </section>
    )
}
