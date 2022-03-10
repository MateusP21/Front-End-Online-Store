const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  // Implemente aqui
  const request = await fetch(ENDPOINT);
  const json = await request.json();
  return json;
}

export async function getProduct(productId) {
  const ENDPOINT_PRODUCT = `https://api.mercadolibre.com/items/${productId}`;
  const request = await fetch(ENDPOINT_PRODUCT);
  const json = await request.json();
  return json;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const ENDPOINT_CATEGORY_AND_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const request = await fetch(ENDPOINT_CATEGORY_AND_QUERY);
  const json = await request.json();
  return json;
}
