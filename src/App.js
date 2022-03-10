import React from 'react';
import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
const api = require('./services/api');

function App() {
  api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos')
    .then((categories) => { console.log(categories); });
  return (
    <div className="App" />
  );
}

export default App;
