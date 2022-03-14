import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { addProduct } from './services/productStorage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

    generateRandomId = () => {
      const max = 10000;
      const random = Math.floor(Math.random() * max);
      return random;
    }

     handleAddProduct = (product) => {
       const { cart } = this.state;
       const productIndex = this.generateRandomId();
       /* console.log(product); */
       this.setState((prevState) => ({
         cart: [...prevState.cart, { ...product, productIndex }],
       }), () => addProduct(cart));
     };

      handleRemoveProduct = (product) => {
        const { cart } = this.state;
        this.setState({ cart: cart.filter(
          (cartProduct) => cartProduct.productIndex !== product.productIndex,
        ) });
        addProduct(cart);
      };

      render() {
        const { cart } = this.state;
        return (
          <BrowserRouter>
            <Route path="/checkout">
              <Checkout cart={ cart } />
            </Route>
            <Route path="/cart">
              <Cart
                handleAddProduct={ this.handleAddProduct }
                handleRemoveProduct={ this.handleRemoveProduct }
                cart={ cart }
              />
            </Route>
            <Route
              path="/products/:id"
              render={ (props) => (
                <ProductDetail
                  { ...props }
                  handleAddProduct={ this.handleAddProduct }
                />) }
            />
            <Route path="/" exact>
              <Home handleAddProduct={ this.handleAddProduct } cart={ cart } />
            </Route>
          </BrowserRouter>
        );
      }
}

export default App;
