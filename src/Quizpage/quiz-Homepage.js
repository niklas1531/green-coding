import React, { useState } from "react";
import "./quizHomepage.css"
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import ErrorMessage from './quiz-Homepage-Error';
import quizImage from "./quiz-image.svg"


export default function Settings() {
    const navigate = useNavigate()
    const resetQuizProgress = () => {
        localStorage.removeItem("name")
        setName("")
        setLevel('')
        localStorage.removeItem("level1Done")
        localStorage.removeItem("level2Done")

        setLevel1Done(null)
        setLevel2Done(null)
    }


    const [level1Done, setLevel1Done] = useState(localStorage.getItem("level1Done"))
    const [level2Done, setLevel2Done] = useState(localStorage.getItem("level2Done"))
    let disabled
    let level1style
    (!level1Done ? disabled = true : disabled = false);
    (level1Done ? level1style = "achieved" : level1style = "");
    let level2style
    let disabled2
    (!level2Done ? disabled2 = true : disabled2 = false);
    (level2Done ? level2style = "achieved" : level2style = "");
    const [name, setName] = useState(localStorage.getItem("name"))
    const [level, setLevel] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        localStorage.setItem("name", name)
        if (!name || !level) {
            setError(true)
            return;
        } else {
            setError(false)
            navigate("/quiz/level" + level)

        }
    }

    return (
        <div>
            <section className='beige-section settings-desktop' id='settings'>
                <div className="container-fluid settings-structure">
                    <div className='settings' style={{ width: "50%" }}>
                        <span><h2 className='black-text-color'>Quiz Settings</h2></span>
                        <div className='settings-select' style={{ width: "90%" }}>
                            {error && <ErrorMessage />}
                            <TextField fullWidth
                                id="inputName"
                                label="Enter your name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ marginBottom: "4%" }}
                            />

                            <FormControl fullWidth
                                style={{ marginBottom: "4%" }}
                            >
                                <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
                                <Select
                                    value={level}
                                    label="Level"
                                    onChange={(e) => setLevel(e.target.value)}
                                >
                                    <MenuItem value={1}>Level 1</MenuItem>
                                    <MenuItem value={2} disabled={disabled}>Level 2</MenuItem>
                                    <MenuItem value={3} disabled={disabled2}>Level 3</MenuItem>
                                </Select>
                            </FormControl>


                            <button class="overview-button-quiz" onClick={handleSubmit}>Start Quiz</button>
                            <button class="overview-button-quiz" onClick={resetQuizProgress}>Reset Settings</button>

                        </div>
                    </div>

                    <img src={quizImage} alt='quiz' className='banner' />

                </div>
                <div style={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
                    <i className={`fas fa-tree fa-4x tree-quiz ${level1style}`}></i>
                    <i className={`fas fa-tree fa-3x tree-quiz ${level2style}`}></i>

                    <i className="fas fa-tree fa-4x tree-quiz"></i>
                    <i className="fas fa-tree fa-3x tree-quiz" ></i>
                    <i className="fas fa-tree fa-4x tree-quiz"></i>
                    <i className="fas fa-tree fa-3x tree-quiz"></i>
                </div>
            </section>

            <section className='beige-section settings-mobile' id='settings'>
                <div className="container-fluid settings-structure"
                >
                    <img src={quizImage} alt='quiz' className='banner' />

                    <div className='settings'>
                        <span><h2 className='black-text-color'>Quiz Settings</h2></span>
                        <div className='settings-select' style={{ width: "90%" }}>
                            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                            <TextField fullWidth
                                id="outlined-basic"
                                label="Enter your name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ marginBottom: "4%", marginTop: "8%" }}
                            />

                            <FormControl fullWidth
                                style={{ marginBottom: "4%" }}
                            >
                                <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
                                <Select
                                    value={level}
                                    label="Level"
                                    onChange={(e) => setLevel(e.target.value)}
                                >
                                    <MenuItem className="MenuItem-Quiz" value={1}>Level 1</MenuItem>
                                    <MenuItem className="MenuItem-Quiz" value={2} disabled={disabled}>Level 2</MenuItem>
                                    <MenuItem className="MenuItem-Quiz" value={3} disabled={disabled2}>Level 3</MenuItem>
                                </Select>
                            </FormControl>

                            <div className="buttons-bottom">
                                <button className="overview-button-quiz" onClick={handleSubmit}>Start Quiz</button>
                                <button className="overview-button-quiz" onClick={resetQuizProgress}>Reset Settings</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
                        <i className={`fas fa-tree fa-4x tree-quiz ${level1style}`}></i>
                        <i className={`fas fa-tree fa-3x tree-quiz ${level2style}`}></i>

                        <i className="fas fa-tree fa-4x tree-quiz"></i>
                        <i className="fas fa-tree fa-3x tree-quiz" ></i>
                        <i className="fas fa-tree fa-4x tree-quiz"></i>
                        <i className="fas fa-tree fa-3x tree-quiz"></i>
                    </div>
                </div>

            </section>
        </div>


    )

}