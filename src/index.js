import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Layout.css"

import Home from "./Homepage/home"
import About from "./components/About-Section/about"
import KPIs from "./components/KPI-Section/kpis"
import Contact from "./components/Contact-Section/contact"
import Team from "./components/Team-Section/team"
import QuizPage from './Quizpage/quizPage';
import Level1 from "./Quizpage/level1"
import Level2 from "./Quizpage/level2"

import { Routes, Route, HashRouter } from 'react-router-dom';
import Codesize from './components/KPI-Pages/codesize';
import Datastructures from './components/KPI-Pages/datastructures';
import Iterativerecursive from './components/KPI-Pages/iterativerecursive';
import Maintainability from './components/KPI-Pages/maintainability';
import Literature from "./LiteraturePage/literature";

export default function App() {

    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />

                <Route path="/about" element={<About />} />
                <Route path="/kpis" element={<KPIs />} />
                <Route path="/kpis/codesize" element={<Codesize />} />
                <Route path="/kpis/datastructures" element={<Datastructures />} />
                <Route path="/kpis/iterativeRecursive" element={<Iterativerecursive />} />
                <Route path="/kpis/maintainability" element={<Maintainability />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quiz/level1" element={<Level1 />} />
                <Route path="/quiz/level2" element={<Level2 />} />
                <Route path="/literature" element={<Literature />} />
                <Route path="/home" exact element={<Home />} />
            </Routes>
        </HashRouter>


    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);