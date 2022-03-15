import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

class CardProduct extends React.Component {
  render() {
    const { product, handleAddProduct } = this.props;
    const { shipping } = product;
    return (
      <div className="product-card">

        <Link data-testid="product-detail-link" to={ `products/${product.id}` }>
          <div data-testid="product">
            <img className="card-product-img" src={ product.thumbnail } alt="Product" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>

          </div>
        </Link>
        {
          shipping.free_shipping
            ? <h4 data-testid="free-shipping">Frete Gratis</h4> : ''
        }
        <button
          data-testid="product-add-to-cart"
          type="button"
          className="product-card-add-to-cart"
          onClick={ () => handleAddProduct(product) }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

export default CardProduct;
