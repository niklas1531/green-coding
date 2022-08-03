import React from 'react'
import './welcome.css'

export default function Welcome(props) {
    return (
        <section class="beige-section kpi-welcome">
            <div class="container-fluid">
                <i class="fa-solid fa-leaf black-text-color"></i>
                <h1 class="black-text-color">Energy Efficiency</h1>
                <hr class="line" />


                <p className="lead grey-text-color kpi-welcome-desktop">
                    Great that you are here and want to learn more about green code's key performance indicator (KPI)
                    energy efficiency and its dimensions!
                    <br />
                    <br />
                    With regards to green coding, energy efficiency means writing code in such way that it consumes the
                    least energy possible and thus reducing the pollution of the environment.
                    <br />
                    <br />
                    Energy efficiency is often
                    measured by the energy a code, program, or software consumes at runtime on the CPU level (in
                    Joules). As you can imagine, there are various parts of code that can influence its energy
                    efficiency. For that reason, we defined <strong>4 dimensions of energy efficiency</strong>.

                </p>

                <details className="kpi-welcome-mobile">
                    <summary>
                        <p className="lead grey-text-color"> Great that you are here and want to learn more about green
                            code's key performance indicator
                            (KPI)
                            energy efficiency and its dimensions!</p>
                    </summary>

                    <p className="lead grey-text-color">

                        With regards to green coding, energy efficiency means writing code in such way that it consumes
                        the
                        least energy possible and thus reducing the pollution of the environment.
                        <br />
                        Energy efficiency is often
                        measured by the energy a code, program, or software consumes at runtime on the CPU level (in
                        Joules). As you can imagine, there are various parts of code that can influence its energy
                        efficiency. For that reason, we defined 4 dimensions of energy efficiency.
                        <br />
                        You want to learn more about that and improve the energy efficiency of your code in just a few
                        steps? Let's get started!
                    </p>
                </details>
            </div>
        </section>
    )
}
