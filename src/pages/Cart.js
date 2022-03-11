import React from 'react';
import { Link } from 'react-router-dom';
import { readCartProducts } from '../services/productStorage';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const products = readCartProducts();
    this.setState({
      product: products,
    });
  }

  render() {
    const { product } = this.state;

    return (
      <section>
        {' '}
        <Link to="/"> home </Link>
        {
          product.length > 0
            ? product.map((cartProduct) => (
              <div key={ cartProduct.id }>
                <h2 data-testid="shopping-cart-product-name">{cartProduct.title}</h2>
                <p data-testid="shopping-cart-product-quantity">
                  {
                    product.filter(
                      (productFilter) => productFilter.title === cartProduct.title,
                    ).length
                  }
                </p>
              </div>))

            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        }

      </section>
    );
  }
}

export default Carrinho;
