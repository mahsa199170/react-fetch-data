import './App.css';
import axios from 'axios';

function App() {
  const apiKey = '3712c40bd43b9b9c388818e83126cc94';
  const api = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`;
  return <div className="App">{api}</div>;
}

export default App;
