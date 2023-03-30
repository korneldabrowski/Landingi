import { useEffect, useState } from 'react';
import { addToCart, CartType } from '@infrastructure/api/basket';

function useAddToCart() {
  const [myData, setData] = useState<CartType>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!myData) return;

    addToCart(myData)
      .then((data) => {
        window.alert(`New cart created with ID ${data.id}`);
        console.log(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(new Error(`Failed to add item to cart. ${err.message}`));
      });
  }, [myData]);

  return { addToCart: setData, error };
}

export default useAddToCart;
