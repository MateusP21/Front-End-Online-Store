import React from 'react';
import { Link } from 'react-router-dom';
// import { readCartProducts } from '../services/productStorage';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      // product: [],
      // productQuantity: 0,
    };
  }

  // componentDidMount() {
  //   const products = readCartProducts();
  //   this.setState({
  //     product: products,
  //     productQuantity: products.length,
  //   });
  // }

  render() {
    // const { product, productQuantity } = this.state;
    const { handleAddProduct, handleRemoveProduct, cart } = this.props;
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

            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        }

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
