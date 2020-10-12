export const baseUrl = 'http://localhost:4000';
export const routes = {
  products: () => `${baseUrl}/products`,
  product: (productId) => `${baseUrl}/products/${productId}`,
};
