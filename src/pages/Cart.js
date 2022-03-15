import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { readCartProducts } from '../services/productStorage';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      disabledButton: false,
    };
  }

  verifyAvailability = (product) => {
    const { cart, handleAddProduct } = this.props;
    const cartProductQuantity = cart.filter(
      (productFilter) => productFilter.title === product.title,
    ).length;

    if (cartProductQuantity >= product.available_quantity) {
      this.setState({
        disabledButton: true,
      });
    } else {
      this.setState({
        disabledButton: false,
      }, () => handleAddProduct(product));
    }
  }

  render() {
    const { disabledButton } = this.state;
    const { handleRemoveProduct, cart } = this.props;
    return (
      <section>
        {' '}
        <Link to="/"> home </Link>
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
                    onClick={ () => this.verifyAvailability(cartProduct) }
                    data-testid="product-increase-quantity"
                    type="button"
                    disabled={ disabledButton }
                  >
                    +

                  </button>
                  <button
                    onClick={ () => handleRemoveProduct(cartProduct) }
                    data-testid="product-decrease-quantity"
                    type="button"
                    disabled={ disabledButton }
                  >
                    -

                  </button>
                </div>))

            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
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
