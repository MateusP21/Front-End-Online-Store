const CART_PRODUCT_KEY = 'cart_products';

if (!JSON.parse(localStorage.getItem(CART_PRODUCT_KEY))) {
  localStorage.setItem(CART_PRODUCT_KEY, JSON.stringify([]));
}
const readCartProducts = () => JSON.parse(localStorage.getItem(CART_PRODUCT_KEY));

const saveCartProducts = (product) => localStorage
  .setItem(CART_PRODUCT_KEY, JSON.stringify(product));

const addProduct = (product) => {
  if (product) {
    const products = readCartProducts();
    saveCartProducts([...products, product]);
  }
};
module.exports = { readCartProducts, addProduct };
