import React from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/api';

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
        <h3 data-testid="product-detail-name">
          {product.title}
        </h3>
        <span>{product.price}</span>
        <img src={ product.thumbnail } alt="" />
      </div>
    );
  }
}

export default ProductDetail;
