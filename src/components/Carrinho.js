import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cartSize } from '../services/productStorage';
import '../styles/Carrinho.css';

const cartImg = require('../icons/shopping-cart.png');

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 0,
    };
  }

  componentDidMount() {
    this.verifySize();
  }

    verifySize = () => {
      this.setState({
        size: cartSize(),
      });
    }

    render() {
      const { size } = this.state;
      const { cart } = this.props;
      return (
        <Link data-testid="shopping-cart-button" to="/cart">
          <div className="cart-group">
            <img className="cart-img" src={ cartImg } alt="Shopping Cart Icon" />
            <p className="cart-quantity" data-testid="shopping-cart-size">
              { !size ? cart.length : size}
            </p>
          </div>
        </Link>);
    }
}

Carrinho.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carrinho;
