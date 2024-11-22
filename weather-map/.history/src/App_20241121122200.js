import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  console.log('i am data', data);
  // const [location, setLocation] = useState('');
  const location = 'dallas';
  const apiKey = '3712c40bd43b9b9c388818e83126cc94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const fetchWeatherData = axios
    .get(url)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="app">
      <div className="container">
        <input
          type="text"
          placeholder="Enter Location"
          name="location"
          value={location}
          onChange={(e) => handleLocation(e)}
        />
        <div className="top">
          <div className="location">
            <p>{location}</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">65</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
