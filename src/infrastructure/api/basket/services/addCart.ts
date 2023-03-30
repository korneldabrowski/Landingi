import { apiRequest } from '../helpers/ApiHelper';
import { Cart } from '../basket.types';

const API_URL = 'https://dummyjson.com';

async function addToCart(cart: Cart): Promise<Cart> {
  try {
    const response = await apiRequest<Cart>(API_URL, '/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      queryParams: {},
      data: cart,
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to add item to cart. ${error.message}`);
    } else {
      throw new Error(`Failed to add item to cart. Unknown error`);
    }
  }
}

export default addToCart;
