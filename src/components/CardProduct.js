import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { readCartProducts, addProduct } from '../services/productStorage';

class CardProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section>

        <Link data-testid="product-detail-link" to={ `products/${product.id}` }>
          <div data-testid="product">

            <img src={ product.thumbnail } alt="Product" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>

          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addProduct(product) }
        >
          Adicionar ao carrinho

        </button>
      </section>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProduct;
