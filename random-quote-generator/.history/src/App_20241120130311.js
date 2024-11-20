import React from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const fetchAdvice = axios.get('https://api.adviceslip.com/advice');
  console.log(fetchAdvice);

  return <div>App</div>;
};

export default App;
