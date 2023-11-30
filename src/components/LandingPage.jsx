import React from "react";
import "./LandingPage.css";

export default function LandingPage(props) {
    return (
        <header>
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button onClick={() => props.setFirstLoad(false)}>Start quiz</button>
        </header>
    )
}