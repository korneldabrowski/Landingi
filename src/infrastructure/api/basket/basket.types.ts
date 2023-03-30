export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: string;
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number>;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartListResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}
