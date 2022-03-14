import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        carrinho
        <p data-testid="shopping-cart-size">
          { cart.length === 0 ? '0' : cart.length}
        </p>
      </Link>);
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carrinho;
