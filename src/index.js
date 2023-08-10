import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './font/SevenSeasRegular-lgeYD.ttf'



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const Root = () => {
  const [team, setTeam] = useState(true);

  useEffect(() => {
    team ? document.body.classList.add('body__light') : document.body.classList.add('body__dark');
    return () => {
      team ? document.body.classList.remove('body__light') : document.body.classList.remove('body__dark');
    };
  });

  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <React.StrictMode>
      <App team={team} setTeam={setTeam}/>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);