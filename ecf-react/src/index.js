import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DisplayMenu from './component/displayMenu';
import '../src/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrderSucess from './component/orderSucess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App />} />
        <Route index element ={<DisplayMenu/>} />
        <Route path="/commande/:title" element={<OrderSucess/>} />
      </Routes>
    </BrowserRouter>
  </>
);


