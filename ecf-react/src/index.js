import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DisplayMenu from './component/displayMenu';
import '../src/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <DisplayMenu/>
  </>
);


