import './App.css';
import axios from 'axios';

function App() {
  const apiKey = '3712c40bd43b9b9c388818e83126cc94';
  // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`;
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3712c40bd43b9b9c388818e83126cc94';

  const fetchWeatherData = axios
    .get(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  return <div className="App">app</div>;
}

export default App;
