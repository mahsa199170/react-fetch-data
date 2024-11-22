import './App.css';
import axios from 'axios';

function App() {
  const apiKey = '3712c40bd43b9b9c388818e83126cc94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${apiKey}`;

  const fetchWeatherData = axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  return (
    <div className="app">
      <div className="container">
        <div className="top"></div>
      </div>
    </div>
  );
}

export default App;
