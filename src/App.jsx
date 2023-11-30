import React from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";
import Question from "./components/Question";
import { decode }  from "html-entities";
import { nanoid } from "nanoid";

export default function App() {
    const [firstLoad, setFirstLoad] = React.useState(true);
    const [allQuestions, setAllQuestions] = React.useState([]);
    console.log(allQuestions);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setAllQuestions(getQuestions(data.results)))
    }, [])

    function getQuestions(lstQuestions) {
        const cleanedQuestions = lstQuestions.map((obj, idx) => (
            {
                id: nanoid(), 
                question: decode(obj.question),
                answers: shuffleAnswers([obj.correct_answer, ...obj.incorrect_answers]),
                correct_answer: obj.correct_answer
            })
        )
        return cleanedQuestions;
    }

    function shuffleAnswers(arrAnswers) {
        for (let i=arrAnswers.length - 1; i>0; i--) {
            const index = Math.floor(Math.random() * (i+1));
            [arrAnswers[i], arrAnswers[index]] = [decode([arrAnswers[index]]), decode([arrAnswers[i]])];
        }
        return arrAnswers;
    }

    const questionElements = allQuestions.map(question => {
        return <Question question={question} />
    })
        
    return (
        <main>
            {
                firstLoad ? 
                <LandingPage setFirstLoad={ setFirstLoad }/> : 
                <div className="container">
                    {allQuestions.length > 0 ? questionElements : <h3>Loading Questions...</h3>}
                    <button className="btn-answers">Check Answers</button>
                </div>                
            }
        </main>
    )
}
