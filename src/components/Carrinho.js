import React from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends React.Component {
  render() {
    return <Link data-testid="shopping-cart-button" to="/cart"> carrinho </Link>;
  }
}

export default Carrinho;
