import React from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <Link to="/"> home </Link>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Carrinho;
