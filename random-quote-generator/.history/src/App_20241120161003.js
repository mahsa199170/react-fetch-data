import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [adice, setAdvice] = useState('');

  const fetchAdvice = axios
    .get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      console.log(advice);
    })
    .catch((err) => console.error(err.message));

  return <div>{advice}</div>;
};

export default App;

// const App = () => {
//   const fetchAdvice = async () => {
//     try {
//       const res = await axios.get('https://api.adviceslip.com/advice');
//       console.log(res);
//       console.log(res.data.slip.advice);
//     } catch (error) {
//       console.log('error is:', error);
//     }
//   };
//   fetchAdvice();

//   return <div>App</div>;
// };

// export default App;
