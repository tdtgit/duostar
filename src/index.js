import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rank from './Rank';
import Note from './Note';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Note />
    <Rank />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
