import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';

import RemoveCart from './RemoveCart/RemoveCart';

function Cart({ id, onClick }: { id: number; onClick?: () => void }) {
  return (
    <div className="card card-compact hover:bg-opacity-40  rounded-md cursor-pointer  bg-base-300 ">
      <div role={'button'} onClick={onClick} className="card-body">
        <ShoppingCartIcon className="w-6 h-6 mx-auto" />
        <h2 className="card-title">Cart ID: {id}</h2>
      </div>
      <>
        <RemoveCart cartId={id} />
      </>
    </div>
  );
}

export default Cart;
