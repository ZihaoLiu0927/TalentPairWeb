import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('Container!');

const element = document.querySelector('.container_root');
const root = ReactDOM.createRoot(element);
root.render(<App />);
