import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = axios
    .get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      setAdvice(advice);
    })
    .catch((err) => console.error(err.message));

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={handleClick}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
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
