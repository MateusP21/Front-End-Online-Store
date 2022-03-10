import React from 'react';
import './App.css';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
const api = require('./services/api');

function App() {
  api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos')
    .then((categories) => { console.log(categories); });
  return (
    <div className="App">
      <input type="text" />
      <h1
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.

      </h1>

    </div>
  );
}

export default App;
