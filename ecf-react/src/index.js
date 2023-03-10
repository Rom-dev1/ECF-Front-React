import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DisplayMenu from './component/displayMenu';
import '../src/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrderSucess from './component/orderSucess';
import Meat from './component/meat';
import Vegetable from './component/vegetables';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App />} />
        <Route index element ={<DisplayMenu/>} />
        <Route path="/commande/:title" element={<OrderSucess/>} />
        <Route path="/repas/:viande" element={<Meat/>} />
        <Route path="/vege/legumes" element={<Vegetable/>} />
      </Routes>
    </BrowserRouter>
  </>
);


