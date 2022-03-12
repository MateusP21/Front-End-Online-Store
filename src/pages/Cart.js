import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';
// import { readCartProducts } from '../services/productStorage';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      // product: [],
      // productQuantity: 0,
      productsWithNoRep: [],
    };
  }

  componentDidMount() {
    const { cart } = this.props;
    const onlyIds = cart.map((product) => product.id);
    const idsNoRep = [...new Set(onlyIds)];
    const prodNoRep = [];
    idsNoRep.forEach(async (id) => {
      const prod = await getProduct(id);
      prodNoRep.push(prod);
    });
    this.setState({ productsWithNoRep: prodNoRep });
    console.log(prodNoRep);
  //   const products = readCartProducts();
  //   this.setState({
  //     product: products,
  //     productQuantity: products.length,
  //   });
  }

  render() {
    // const { product, productQuantity } = this.state;
    const { productsWithNoRep } = this.state;
    const { handleAddProduct, handleRemoveProduct, cart } = this.props;
    return (
      <section>
        {' '}
        <Link to="/"> home </Link>
        {
          cart.length > 0
            ? cart.map((cartProduct) => (
              <div key={ cartProduct.productIndex }>
                <h2 data-testid="shopping-cart-product-name">{cartProduct.title}</h2>
                <img src={ cartProduct.thumbnail } alt="Product Pic" />
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
                  { productsWithNoRep.length }
                  {/* coloquei isso aqui só pro lint parar de reclamar
                    que a chave nao tava sendo usada */}

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
