import { apiRequest } from '../helpers/ApiHelper';

import { Cart } from '../basket.types';

const API_URL = 'https://dummyjson.com';

async function getCartById(cartId: number): Promise<Cart> {
  try {
    const response = await apiRequest<Cart>(API_URL, `/carts/${cartId}`, {
      method: 'GET',
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to retrieve carts. ${error.message}`);
    } else {
      throw new Error(`Failed to retrieve carts. Unknown error`);
    }
  }
}

export default getCartById;
