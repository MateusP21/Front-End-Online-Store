import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from '../components/Carrinho';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  // getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos').then((categories) => { console.log(categories) })
  render() {
    return (
      <div className="App">

        <input type="text" />
        <Carrinho />
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>

      </div>
    );
  }
}

export default Home;
