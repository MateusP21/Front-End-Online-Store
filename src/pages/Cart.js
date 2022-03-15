import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import PropTypes from 'prop-types';
// import { readCartProducts } from '../services/productStorage';

const home = require('../icons/casa.png');
const shopGif = require('../icons/run-shopping.gif');

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      // product: [],
      // productQuantity: 0,
    };
  }

  render() {
    const { handleAddProduct, handleRemoveProduct, cart } = this.props;
    return (
      <section>
        {' '}
        <Link to="/">
          <img className="home-icon-cart" src={ home } alt="Home Icon" />
        </Link>
        {
          cart.length > 0
            ? [...new Map(cart.map((cartItem) => [cartItem.id, cartItem])).values()]
              .map((cartProduct) => (
                <div key={ cartProduct.productIndex }>
                  <h2 data-testid="shopping-cart-product-name">{cartProduct.title}</h2>
                  <p data-testid="shopping-cart-product-quantity">
                    {
                      cart.filter(
                        (productFilter) => productFilter.title === cartProduct.title,
                      ).length

                    }
                  </p>
                  <button
                    onClick={ () => handleAddProduct(cartProduct) }
                    data-testid="product-increase-quantity"
                    type="button"
                  >
                    +

                  </button>
                  <button
                    onClick={ () => handleRemoveProduct(cartProduct) }
                    data-testid="product-decrease-quantity"
                    type="button"
                  >
                    -

                  </button>
                </div>))

            : (
              <div>
                <h2 data-testid="shopping-cart-empty-message">
                  Seu carrinho ainda está vazio!
                </h2>
                <p>Que tal ir comprar algo?</p>
                <img src={ shopGif } alt="Shopping Gif" />
              </div>)
        }
        <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
      </section>

    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
};
export default Cart;
