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
            <h3>{product.title}</h3>
            <img className="card-product-img" src={ product.thumbnail } alt="Product" />
            <p>{`R$${product.price.toFixed(2)}`}</p>

          </div>
        </Link>
        {
          shipping.free_shipping
            ? <p data-testid="free-shipping">Frete Grátis! 🗳️</p> : ''
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
