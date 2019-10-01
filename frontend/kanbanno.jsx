import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store'; // Doesn't exist yet
// import Root from './components/root'; // Doesn't exist yet

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hello, React is working!</h1>, root)
})