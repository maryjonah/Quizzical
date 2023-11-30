import React from "react";
import "./Question.css";


export default function Question(props) {
    console.log(props);
    const answerOptions = props.question.answers.map(answer => (
        <p key={answer} className="indAnswer">{answer}</p>
    ))

    return (
        <main>
            <h3>{props.question.question}</h3>
            <div className="answers">{answerOptions}</div>
            <hr />
        </main>
    )
}