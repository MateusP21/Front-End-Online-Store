const CART_PRODUCT_KEY = 'cart_products';

if (!JSON.parse(localStorage.getItem(CART_PRODUCT_KEY))) {
  localStorage.setItem(CART_PRODUCT_KEY, JSON.stringify([]));
}
const readCartProducts = () => JSON.parse(localStorage.getItem(CART_PRODUCT_KEY));

const saveCartProducts = (product) => localStorage
  .setItem(CART_PRODUCT_KEY, JSON.stringify(product));

const addProduct = (product) => {
  const products = readCartProducts();

  if (product) {
    saveCartProducts([...products, product]);
  }
};

const cartSize = () => readCartProducts().length;
module.exports = { readCartProducts, addProduct, cartSize };
