import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Checkout.css';

const back = require('../icons/back.png');

class Checkout extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <section>
        <Link to="/cart">
          <img className="back-icon" src={ back } alt="Back Icon" />
        </Link>
        {
          cart.length === 0 ? <h2>Seu carrinho está vazio</h2>
            : cart.map((cartItem) => (
              <div key={ cartItem.id }>
                <img src={ cartItem.thumbnail } alt="" />
                <p>{cartItem.title}</p>
                <p>{cartItem.price}</p>
              </div>
            ))

        }

        {
          cart.length > 0
             && (
               <>
                 <p>
                   TOTAL:
                   {cart.map((cartItem) => cartItem.price)
                     .reduce((acc, current) => (acc + current), 0)}
                 </p>
                 <form action="">
                   <input
                     type="text"
                     data-testid="checkout-fullname"
                     name=""
                     id=""
                     placeholder="Nome completo"
                   />
                   <input
                     type="text"
                     data-testid="checkout-email"
                     name=""
                     id=""
                     placeholder="Email"
                   />
                   <input
                     type="text"
                     data-testid="checkout-cpf"
                     name=""
                     id=""
                     placeholder="CPF"
                   />
                   <input
                     type="text"
                     data-testid="checkout-phone"
                     name=""
                     id=""
                     placeholder="Telefone"
                   />
                   <input
                     type="text"
                     data-testid="checkout-cep"
                     name=""
                     id=""
                     placeholder="CEP"
                   />
                   <input
                     type="text"
                     data-testid="checkout-address"
                     name=""
                     id=""
                     placeholder="Endereço"
                   />

                   <button
                     type="button"
                   >
                     Finalizar Compra

                   </button>
                 </form>
               </>
             )
        }

      </section>);
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
