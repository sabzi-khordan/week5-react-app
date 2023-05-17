
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App" >
      <div className="container">
      <h1>Weather App</h1>
      <Weather  defaultCity="London"/>
      <footer>
        This project was coded by Akiya and is <a href="https://github.com/sabzi-khordan/week5-react-app" target="_blank"  rel="noreferrer"> 
          open-sourced
        </a>
      </footer>
      </div>
    </div>
  )
    
  
}

export default App;
