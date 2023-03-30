import React, { useState } from 'react';
import { Button } from '@UI/buttons';
import AddToCartModal from './AddToCartModal';
import useAddToCart from 'infrastructure/hooks/useAddToCart';
import { Cart } from '@infrastructure/api/basket/basket.types';

function AddCart() {
  const [open, setOpen] = useState(false);
  const { addToCart, error } = useAddToCart();

  const handleSubmit = (data: Cart) => {
    addToCart(data);
  };

  return (
    <>
      <Button size="wide" color="primary" onClick={() => setOpen(!open)}>
        Add new cart
      </Button>
      <AddToCartModal open={open} setOpen={setOpen} onSubmit={handleSubmit} />
      {error && <div>{error.message}</div>}
    </>
  );
}

export default AddCart;
