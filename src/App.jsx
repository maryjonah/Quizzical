import React from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";

export default function App() {
  const [firstLoad, setFirstLoad] = React.useState(true);
  const [allQuestions, setAllQuestions] = React.useState([]);
  console.log(allQuestions);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))
  }, [])
    
    return (
        <main>
            {
                firstLoad ? 
                <LandingPage setFirstLoad={ setFirstLoad }/> : 
                <h4>First Page</h4>
            }
        </main>
    )
}
