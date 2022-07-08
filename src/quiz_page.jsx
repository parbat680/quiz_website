import React, { useState} from "react";
import "./quiz_page.css";

// import firebase from 'firebase';

import {  } from "@testing-library/react";







// Initialize Firebase



function Quizmain(props) {

//   const firebaseConfig = {
//     apiKey: "AIzaSyDvq5NUhOCV3wR63fgwrpaLjlnerQZoohU",
//     authDomain: "quizapp-83e3e.firebaseapp.com",
//     projectId: "quizapp-83e3e",
//     storageBucket: "quizapp-83e3e.appspot.com",
//     messagingSenderId: "952739790931",
//     appId: "1:952739790931:web:56d002ee06522b1d0806a6"
//   };
//   var {ques,setquestions}= useState([]);
  
//   const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//   const db= app.firestore();
//   const loaddata=async()=>{
//     const response=db.collection('questions');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setquestions([...ques,item.data()])
//     })
// }
//   useEffect(()=> {
//     loaddata();
//   },[]);
  
  // Propertie
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  

  
 
 


 const questions = props.ques;

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  
  return (
    
    <div className="App">
     
    
      {/* 1. Header  */}
      <h1 style={{color: "white"}}>Quiz Website</h1>

      {/* 2. Current Score  */}
      <h2 style={{color: "white"}}>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results" >
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => window.location.reload()}>Home Screen</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quizmain;