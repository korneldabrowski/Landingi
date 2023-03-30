import { useEffect, useState } from 'react';
import {
  getAllCarts,
  deleteCart,
  getCartById,
  CartType,
} from '@infrastructure/api/basket';

// type CartOrListResponse = CartListResponse | Cart;

export default function useFetch({
  type,
  id,
  cart,
  callback,
}: {
  type: 'getAllCarts' | 'deleteCart' | 'viewCart';
  id?: number;
  cart?: CartType;
  callback?: (_data: any) => void;
}) {
  const [data, setData] = useState<CartType[] | null | CartType>(null);

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        switch (type) {
          case 'getAllCarts':
            const response = await getAllCarts({ limit: 10 });
            setData(response.carts);
            break;
          case 'deleteCart':
            if (!id) {
              const errorMsg = 'ID is required for deleteCart';
              setError(new Error(errorMsg));
              throw new Error(errorMsg);
            }
            const deletedCart = await deleteCart(id);
            setData(deletedCart);
            break;
          case 'viewCart':
            if (!id) {
              const errorMsg = 'ID is required for viewCart';
              setError(new Error(errorMsg));
              throw new Error(errorMsg);
            }

            const viewedCart = await getCartById(id);
            setData(viewedCart);
            break;
          default:
            throw new Error('Invalid fetch type specified');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
          throw new Error(`Failed to retrieve data. ${error.message}`);
        } else {
          setError(new Error('Unknown error occurred'));
          throw new Error('Failed to retrieve data. Unknown error');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [type, id, cart, callback]);

  return { data, error, isLoading };
}
