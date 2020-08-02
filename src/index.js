import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.js';

const App = () => {

  return (
    <Home/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);