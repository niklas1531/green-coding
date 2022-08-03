
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import Overview from "../components/Overview-Section/overview";
import About from "../components/About-Section/about";
import KPIs from "../components/KPI-Section/kpis";
import Team from "../components/Team-Section/team";
import Contact from "../components/Contact-Section/contact";
import React from 'react';

function Home() {
    return (
        <div >
            <Navbar />
            <Overview />
            <About />
            <KPIs />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home