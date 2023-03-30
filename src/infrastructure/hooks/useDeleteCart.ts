import { useEffect, useState } from 'react';
import { deleteCart, CartType } from '@infrastructure/api/basket';

function useDeleteCart() {
  const [cartId, setCartId] = useState<number>();
  const [error, setError] = useState<Error | null>(null);
  const [deletedCart, setDeletedCart] = useState<CartType | null>(null);

  useEffect(() => {
    if (!cartId) return;

    deleteCart(cartId)
      .then((data) => {
        window.alert(`Cart with ID ${cartId} has been deleted`);
        setDeletedCart(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(
          new Error(`Failed to delete cart with ID ${cartId}. ${err.message}`)
        );
      });
  }, [cartId]);

  return { deleteCart: setCartId, error, deletedCart };
}

export default useDeleteCart;
