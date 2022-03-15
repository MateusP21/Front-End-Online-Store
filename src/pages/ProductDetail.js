import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';
import Reviews from '../components/Reviews';
import Carrinho from '../components/Carrinho';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      product: '',
      email: '',
      review: '',
      rating: '',
      saveButton: true,
      //  clicked: false,
      reviews: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProduct(id).then((product) => this.setState({ product }));

    const REVIEW_KEY = 'review';
    if (!JSON.parse(localStorage.getItem(REVIEW_KEY))) {
      localStorage.setItem(REVIEW_KEY, JSON.stringify([]));
    }

    this.setState({
      reviews: JSON.parse(localStorage.getItem(REVIEW_KEY)),
    });
  }

  addRating = ({ target }) => {
    this.setState({
      rating: target.id,
    });
  }

   addReview = () => {
     const REVIEW_KEY = 'review';
     const { email, review, rating } = this.state;
     const completedReview = { email, review, rating };
     const reviews = JSON.parse(localStorage.getItem(REVIEW_KEY));
     localStorage.setItem(REVIEW_KEY, JSON.stringify([...reviews, completedReview]));
     this.setState({
       reviews: JSON.parse(localStorage.getItem(REVIEW_KEY)),
     });
   }

   handleReview = ({ target }) => {
     const { name } = target;
     this.setState({
       [name]: target.value,
     }, () => {
       this.setState((prevState) => ({
         saveButton: prevState.email.length > 0 ? !prevState : prevState,
       }));
     });
   }

   render() {
     const { product, saveButton, email, reviews } = this.state;
     const { handleAddProduct, cart } = this.props;
     const { shipping } = product;
     return (
       <div>
         <Carrinho cart={ cart } />
         <h3 data-testid="product-detail-name">
           {product.title}
         </h3>
         <span>{product.price}</span>
         {
           product.length > 0
           && shipping.free_shipping
             && <h4 data-testid="free-shipping">Frete Gratis</h4>
         }
         <img src={ product.thumbnail } alt="" />
         <button
           data-testid="product-detail-add-to-cart"
           type="button"
           onClick={ () => handleAddProduct(product) }
         >
           {' '}
           Adicionar ao carrinho

         </button>

         <section>
           <form>

             <input
               onChange={ this.handleReview }
               value={ email }
               data-testid="product-detail-email"
               type="text"
               id="email"
               name="email"
               placeholder="Digite seu email"
             />

             <label htmlFor="1">
               <input
                 type="checkbox"
                 onChange={ this.addRating }
                 data-testid="1-rating"
                 name="rating"
                 id="1"
               />
             </label>
             <input
               type="checkbox"
               onChange={ this.addRating }
               data-testid="2-rating"
               name="rating"
               id="2"
             />
             <input
               type="checkbox"
               onChange={ this.addRating }
               data-testid="3-rating"
               name="rating"
               id="3"
             />
             <input
               type="checkbox"
               onChange={ this.addRating }
               data-testid="4-rating"
               name="rating"
               id="4"
             />
             <input
               type="checkbox"
               onChange={ this.addRating }
               data-testid="5-rating"
               name="rating"
               id="5"
             />

             <label htmlFor="comentario">
               <textarea
                 onChange={ this.handleReview }
                 data-testid="product-detail-evaluation"
                 name="review"
                 id="comentario"
                 cols="30"
                 rows="10"
               />
             </label>
             <button
               onClick={ this.addReview }
               disabled={ saveButton }
               type="button"
               data-testid="submit-review-btn"
             >
               {' '}
               Adicionar
               {' '}

             </button>
           </form>
         </section>
         <section>
           {
             reviews.length > 0
             && reviews.map((r) => (<Reviews
               key={ r.email }
               email={ r.email }
               review={ r.review }
               rating={ r.rating }
             />))

           }
         </section>
       </div>
     );
   }
}

ProductDetail.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetail;
