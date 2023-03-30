import { apiRequest } from '../helpers/ApiHelper';

import { CartListResponse } from '../basket.types';

const API_URL = 'https://dummyjson.com';

async function getAllCarts({
  limit: myLimit = 10,
  sort: mySort = 'asc',
}: {
  limit?: number;
  sort?: 'asc' | 'desc';
}): Promise<CartListResponse> {
  try {
    const response = await apiRequest<CartListResponse>(API_URL, `/carts`, {
      method: 'GET',
      queryParams: { limit: myLimit, sort: mySort },
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

export default getAllCarts;
