/*In this section we give a short insight into our KPI "Energy Efficiency" 
and link to our 4 dimensions "Data Structures", "Iterative/Recursive",
"Code Size", and "Maintainability". */
import React from 'react'
import { HashLink } from "react-router-hash-link";
import EnergyEfficiency from './kpi-image.jpg'
export default function kpis() {
    return (
        <section id="kpis" class="beige-section">
            <div class="container-fluid">
                <h1 class="black-text-color">KPI</h1>
                <hr class="line" />
                <div class="kpis">
                    <div class="kpi-item box-shadow">
                        <img class="kpi-image" src={EnergyEfficiency} alt="kpi2" />
                        <h3 class="black-text-color">Energy Efficiency</h3>
                        <p className="black-text-color" style={{ padding: "2%", paddingTop: "0" }}>The main key performance indicator (KPI) of green coding is energy efficiency.
                            Energy efficiency can be subdivided into 4 different dimensions. To learn more about
                            energy efficiency and its respective dimensions, click on one of the buttons below.</p>
                        <br />
                        <div class="kpi-btns">
                            <HashLink to="/kpis/datastructures/#" class="kpi-link">Data Structures</HashLink>
                            <HashLink to="/kpis/iterativeRecursive/#" class="kpi-link">Iterative / Recursive</HashLink>
                            <HashLink to="/kpis/codesize/#" class="kpi-link">Code Size</HashLink>
                            <HashLink to="/kpis/maintainability/#" class="kpi-link">Maintainability</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
