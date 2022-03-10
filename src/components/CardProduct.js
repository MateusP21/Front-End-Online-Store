import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div data-testid="product">
        <img src={ product.thumbnail } alt="Product" />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardProduct;
