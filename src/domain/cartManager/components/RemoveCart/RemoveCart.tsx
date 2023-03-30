import React, { useState } from 'react';
import { Button } from '@UI/buttons';
import RemoveCartModal from './RemoveCartModal';
import useDeleteCart from '@infrastructure/hooks/useDeleteCart';

function RemoveCart({ cartId }: { cartId: number }) {
  const [open, setOpen] = useState(false);

  const { deleteCart, error, deletedCart } = useDeleteCart();

  const handleSubmit = () => {
    deleteCart(cartId);
  };

  if (error) return <p>Something went wrong</p>;
  if (deletedCart) return <p>Cart deleted</p>;

  return (
    <>
      <Button size="wide" color="error" onClick={() => setOpen(!open)}>
        Remove
      </Button>

      <RemoveCartModal open={open} setOpen={setOpen} onSubmit={handleSubmit} />
    </>
  );
}

export default RemoveCart;
