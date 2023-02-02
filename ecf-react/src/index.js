import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DisplayMenu from './component/displayMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <DisplayMenu/>
  </>
);


