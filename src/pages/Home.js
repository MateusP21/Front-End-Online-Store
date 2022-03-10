import React from 'react';
import CardProduct from '../components/CardProduct';
// import { Link } from 'react-router-dom';
import Carrinho from '../components/Carrinho';
import Sidebar from '../components/Sidebar';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  // getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos').then((categories) => { console.log(categories) })
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      clicked: false,
      query: '',
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

   handleGetProducts = () => {
     const { query } = this.state;
     getProductsFromCategoryAndQuery('', query)
       .then((products) => this.setState({ products, clicked: true }));
   }

   getCategoryId = (id) => {
     const { query, clicked } = this.state;
     if (query.length === 0 && !clicked) {
       getProductsFromCategoryAndQuery(id, '')
         .then((products) => this.setState({ products, clicked: true }));
     } else {
       getProductsFromCategoryAndQuery(id, query)
         .then((products) => this.setState({ products, clicked: true }));
     }
   }

   handleInputChange = ({ target }) => {
     this.setState({
       query: target.value,
     });
   }

   render() {
     const { categories, query, products: { results }, clicked } = this.state;
     return (
       <div className="App">
         <Sidebar categories={ categories } getCategoryId={ this.getCategoryId } />
         <input
           onChange={ (e) => this.handleInputChange(e) }
           value={ query }
           data-testid="query-input"
           type="text"
         />
         <button
           onClick={ this.handleGetProducts }
           data-testid="query-button"
           type="button"
         >
           Pesquisar

         </button>
         <Carrinho />
         {
           !clicked
           && (
             <h1
               data-testid="home-initial-message"
             >
               Digite algum termo de pesquisa ou escolha uma categoria.

             </h1>)
         }

         <section className="products">
           {clicked
             && results.map(
               (product) => <CardProduct key={ product.id } product={ product } />,
             )}
           {' '}
           {
             clicked && results.length === 0 && <h1>Nenhum produto foi encontrado</h1>

           }
         </section>

       </div>
     );
   }
}

export default Home;
