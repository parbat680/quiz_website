import './quiz_page'
import './App.css';
import { Getdata,greet } from './quiz_page';


const name= <Getdata name="psr"/>;

function App() {

  return (
    <div className="App">
      
    
      <h1>hello react  </h1>
      {name}
      
    </div>
  );
}

export default App;
