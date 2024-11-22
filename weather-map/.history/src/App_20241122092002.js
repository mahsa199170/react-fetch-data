import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '3712c40bd43b9b9c388818e83126cc94';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyUp={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            <p>{data.clouds}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{data.main.feels_like}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data.wind}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
