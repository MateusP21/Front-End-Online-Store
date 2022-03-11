import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';
import { addProduct } from '../services/productStorage';

class ProductDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProduct(id).then((product) => this.setState({ product }));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Link to="/"> home </Link>
        <Link data-testid="shopping-cart-button" to="/cart"> carrinho </Link>
        <h3 data-testid="product-detail-name">
          {product.title}
        </h3>
        <span>{product.price}</span>
        <img src={ product.thumbnail } alt="" />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addProduct(product) }
        >
          {' '}
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetail;
