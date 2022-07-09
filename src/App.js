import logo from './logo.png';
import './App.css';
import Quizmain from './quiz_page.jsx';
import Quiz from './quiz.jsx';
import UserNameAndLanguage from './UserNameAndLanguage';

// import firebase from 'firebase';

import { } from "@testing-library/react";
import { useState } from 'react';





const flora = [{
  text: "1. What are evergreen tropical or subtropical forests called?",
  options: [
    { id: 0, text: "Savannah", isCorrect: false },
    { id: 1, text: "Jungle", isCorrect: true },
    { id: 2, text: "Taiga", isCorrect: false },
    
  ]
},
{
  text: "2. Which kind of animals did evolve from dinosaurs?",
  options: [
    { id: 0, text: "Birds", isCorrect: true },
    { id: 1, text: "Mammals", isCorrect: false },
    { id: 2, text: "Cetaceans", isCorrect: false },
    
  ]
},

{
  text: "3. What is photosynthesis in plants?",
  options: [
    { id: 0, text: "A synthesis of organic compounds from from low-energy substrates", isCorrect: true },
    { id: 1, text: "A method of autotrophic nutrition", isCorrect: false },
    { id: 2, text: "A vegetative reproduction with the help of sunlight", isCorrect: false },
    
  ]
},

{
  text: "4. How can the age of a tree be determined?",
  options: [
    { id: 0, text: "By it's height in meters", isCorrect: false },
    { id: 1, text: "By he number of the annual rings", isCorrect: true },
    { id: 2, text: "By the number of branches extending from the trunk", isCorrect: false },
    
  ]
},

{
  text: "5. Which bird can dive to a depth of 500 meters?",
  options: [
    { id: 0, text: "A penguin", isCorrect: false },
    { id: 1, text: "A cormorant", isCorrect: true },
    { id: 2, text: "A gull", isCorrect: false },
    
  ]
},

];


const tech = [{
  text: "1. Who founded Apple Computer?",
  options: [
    { id: 0, text: "Stephen Fry", isCorrect: false },
    { id: 1, text: "Bill Gates", isCorrect: false },
    { id: 2, text: "Steve Jobs", isCorrect: true },
    { id: 3, text: "Stephen Hawking", isCorrect: false },
    
  ]
},
{
  text: "2. Which of these is not a peripheral, in computer terms?",
  options: [
    { id: 0, text: "Keyboard", isCorrect: false },
    { id: 1, text: "Monitor", isCorrect: false },
    { id: 2, text: "Mouse", isCorrect: false },
    { id: 3, text: "Motherboard", isCorrect: true }
    
  ]
},

{
  text: "3. Which of the following is not one of the early “protocols,” or ways to use the Internet?",
  options: [
    { id: 0, text: "Blogging", isCorrect: true },
    { id: 1, text: "Telnet", isCorrect: false },
    { id: 2, text: "Gopher", isCorrect: false },
    { id: 3, text: "FTP", isCorrect: false },
    
  ]
},

{
  text: "4. What does the Internet prefix WWW stand for?",
  options: [
    { id: 0, text: "Wide Width Wickets", isCorrect: false },
    { id: 1, text: "World Wide Web", isCorrect: true },
    { id: 2, text: "Worldwide Weather", isCorrect: false },
    
  ]
},

{
  text: "5. Which of these is not a kind of computer?",
  options: [
    { id: 0, text: "Apple", isCorrect: false },
    { id: 1, text: "Lenovo", isCorrect: false },
    { id: 2, text: "Lada", isCorrect: true },
    
  ]
},

];

const food = [{
  text: "1. What oil is largely used in the cooking of South India?",
  options: [
    { id: 0, text: "Sunflower Oil", isCorrect: false },
    { id: 1, text: "Groundnut Oil", isCorrect: false },
    { id: 2, text: "Coconut Oil", isCorrect: true },
    { id: 3, text: "Cottonseed Oil", isCorrect: false },
    
  ]
},
{
  text: "2. Chicken Tikka Masala was invented in Scotland.",
  options: [
    { id: 0, text: "True", isCorrect: true },
    { id: 1, text: "False", isCorrect: false },
   
    
  ]
},

{
  text: "3. Which of the following street-foods is largely found on most streets across India?",
  options: [
    { id: 0, text: "Pani Puri", isCorrect: true },
    { id: 1, text: "Dahi Bhalle", isCorrect: false },
    { id: 2, text: "Dal Makhani", isCorrect: false },
    { id: 3, text: "Chicken Tikka Masala", isCorrect: false },
    
  ]
},

{
  text: "4. Choose the correct dish that belongs to the Udupi cuisine.",
  options: [
    { id: 0, text: "Rasam", isCorrect: false },
    { id: 1, text: "Dosa", isCorrect: false },
    { id: 2, text: "Idli", isCorrect: false },
    { id: 3, text: "All of the above", isCorrect: true },
    
  ]
},

{
  text: "5. Which city in India is famous for its Biryani?",
  options: [
    { id: 0, text: "Hyderabad", isCorrect: true },
    { id: 1, text: "Goa", isCorrect: false },
    { id: 2, text: "Delhi", isCorrect: false },
    
  ]
},

];


// Initialize Firebase



function App() {

  let [questions,setques]=useState(flora);
  

  const [ isquizlive, setquiz ] = useState(false);
  
  const tookquiz=(Qname)=>{
    if(Qname==='flora'){
      setquiz(true);
      questions=flora;
    }
    if(Qname==='tech'){
      setques(tech);
      setquiz(true);
      
    }
    if(Qname==='food'){
      setques(food);
      setquiz(true);
      
    }
    
};

  

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
              <div className='singlequiz' onClick={()=> tookquiz('flora')}> 
                <Quiz
                  name='Flora Fauna'
                  description='Find out how much you know about out neighbours in Mother Nature'
                  border_color='#17E200'
                  
                />
                 </div> 
                 <div className='singlequiz' onClick={()=> tookquiz('tech')}> 
                <Quiz
                  name='Technology'
                  description='How well do you understand the technologies that take us forward?'
                  border_color='#00B2FF'
                />
                </div>
                <div className='singlequiz' onClick={()=> tookquiz('food')}> 
                <Quiz
                  name='Food'
                  description='Are you aware of the technologies that take us forward?'
                  border_color='#FF9933'
                />
                </div>

              </div>
            </div>
          )
      }
    </div>
  );
}

export default App;