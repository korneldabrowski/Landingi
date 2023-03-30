import { useEffect, useState } from 'react';
import {
  getAllCarts,
  deleteCart,
  addToCart,
  getCartById,
  Cart,
  CartListResponse,
} from '@infrastructure/api/basket';

export default function useFetch({
  type,
  id,
  cart,
}: {
  type: 'getAllCarts' | 'deleteCart' | 'viewCart' | 'addCart';
  id?: number;
  cart?: Cart;
}) {
  const [data, setData] = useState<Cart | null | CartListResponse | Response>(
    null
  );
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        switch (type) {
          case 'getAllCarts':
            const response = await getAllCarts({ limit: 10 });
            setData(response);
            break;
          case 'deleteCart':
            if (!id) throw new Error('ID is required for deleteCart');
            const deletedCart = await deleteCart(id);
            setData(deletedCart);
            break;
          case 'addCart':
            if (!id) throw new Error('ID is required for addCart');
            if (!cart) throw new Error('Cart is required for addCart');
            const addCart = await addToCart(cart);
            setData(addCart);
            break;
          case 'viewCart':
            if (!id) throw new Error('ID is required for viewCart');
            const viewedCart = await getCartById(id);
            setData(viewedCart);
            break;
          default:
            throw new Error('Invalid fetch type specified');
        }
      } catch (error: unknown) {
        setError(error);
        if (error instanceof Error) {
          throw new Error(`Failed to retrieve data. ${error.message}`);
        } else {
          throw new Error(`Failed to retrieve data. Unknown error`);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [type, id, cart]);

  return { data, error, loading };
}
