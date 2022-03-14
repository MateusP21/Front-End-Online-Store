import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Carrinho.css';

const cartImg = require('../icons/shopping-cart.png');

class Carrinho extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        <div className="cart-group">
          <img className="cart-img" src={ cartImg } alt="Shopping Cart Icon" />
          <span className="cart-quantity" data-testid="shopping-cart-size">
            { cart.length === 0 ? '0' : cart.length}
          </span>
        </div>
      </Link>);
  }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carrinho;
