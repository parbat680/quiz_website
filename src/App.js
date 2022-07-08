import logo from './logo.png';
import './App.css';
import Quizmain from './quiz_page.jsx';
import Quiz from './quiz.jsx';
import UserNameAndLanguage from './UserNameAndLanguage';

// import firebase from 'firebase';

import { } from "@testing-library/react";
import { useState } from 'react';








// Initialize Firebase



function App() {


  

  const [ isquizlive, setquiz ] = useState(false);

  const tookquiz=(Qname)=>{
    if(Qname==='food'){
      setquiz(true);
    }
};

  const questions = [{
    text: "Which of the following countries DO NOT border the US?",
    options: [
      { id: 0, text: "Canada", isCorrect: false },
      { id: 1, text: "Russia", isCorrect: true },
      { id: 2, text: "Cuba", isCorrect: true },
      { id: 3, text: "Mexico", isCorrect: false },
    ]
  }];

  return (

    <div className="App">
      {

        isquizlive ?

          (<Quizmain ques={questions} />)
          :
          (
            <div>
              <img className='Logo' src={logo} alt='logo' />


              <div className='All-Quizes'>
              <div className='singlequiz' onClick={()=> tookquiz('food')}> 
                <Quiz
                  name='Flora Fauna'
                  description='Find out how much you know about out neighbours in Mother Nature'
                  border_color='#17E200'
                  
                />
                 </div> 
                <Quiz
                  name='Technology'
                  description='How well do you understand the technologies that take us forward?'
                  border_color='#00B2FF'
                />
                <Quiz
                  name='Food'
                  description='Are you aware of the technologies that take us forward?'
                  border_color='#FF9933'
                />


              </div>
            </div>
          )
      }
    </div>
  );
}

export default App;