import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Route path="/cart" component={ Cart } />
      <Route path="/" exact component={ Home } />
    </BrowserRouter>
  );
}

export default App;
