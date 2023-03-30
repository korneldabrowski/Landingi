import React from 'react';
import AddCart from './components/AddToCart/AddCart';
import Controller from './controller';

function CartView() {
  return (
    <>
      <div className="flex mx-auto justify-center">
        <AddCart />
      </div>
      <div className="  mx-auto flex flex-wrap content-center items-stretch justify-center gap-x-10 gap-y-10  pt-12 pb-12 sm:px-4">
        <Controller />
      </div>
    </>
  );
}

export default CartView;
