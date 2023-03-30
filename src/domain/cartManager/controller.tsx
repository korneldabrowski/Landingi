import React from 'react';
import useFetch from '@infrastructure/hooks/useFetchCart';
import Cart from './components/Cart';
import { CartType } from '@infrastructure/api/basket';
import { useCartDispatch } from 'infrastructure/context/CartContext';
import scroll from '@utils/scrollToTop';

function Controller() {
  const dispatch = useCartDispatch();

  const { data, error, isLoading } = useFetch({
    type: 'getAllCarts',
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error: {error.message}</div>;
  }

  function saveCurrentCart(cart: CartType) {
    dispatch({ type: 'SET_CART', cart });
  }

  if (data && data instanceof Array) {
    return (
      <>
        {data.map((cart: CartType) => (
          <Cart
            key={cart.id}
            id={cart.id}
            onClick={() => {
              saveCurrentCart(cart);
              scroll();
            }}
          />
        ))}
      </>
    );
  }

  return null;
}

export default Controller;
