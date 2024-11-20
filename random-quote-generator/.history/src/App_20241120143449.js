import React from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const fetchAdvice = axios
    .get('https://api.adviceslip.com/advice')
    .then((response) => console.log(response.data.slip.advice))
    .catch((err) => console.error(err.message));

  return <div>App</div>;
};

export default App;
