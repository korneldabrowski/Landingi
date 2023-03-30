import { Product, CartType } from 'infrastructure/api/basket';

export const defaultCartItem: Product = {
  id: Math.floor(Math.random() * 29 + 1),
  quantity: 1, // default value
};

export const defaultCart: CartType = {
  id: Math.floor(Math.random() * 10000 + 1),
  products: [defaultCartItem],

  userId: 32,
};
