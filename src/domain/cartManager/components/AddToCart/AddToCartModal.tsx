import React, { useState } from 'react';
import { Modal } from '@UI/Modal';
import Input from '@UI/Input/Input';
import { Button } from '@UI/buttons';
import { Product, CartType } from 'infrastructure/api/basket';
import { defaultCartItem, defaultCart } from './defaults';
import {
  ItemChangeHandler,
  NewItemHandler,
  RemoveItemHandler,
  SubmitHandler,
} from './handlers';

interface AddToCartModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (_data: CartType) => void;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  open,
  setOpen,
  onSubmit,
}) => {
  const [cart, setCart] = useState<CartType>(defaultCart);
  const [cartItem, setCartItem] = useState<Product[]>([defaultCartItem]);

  const handleAddItem = NewItemHandler(cartItem, setCartItem);
  const handleRemoveItem = RemoveItemHandler(cartItem, setCartItem);
  const handleItemChange = ItemChangeHandler(setCartItem);
  const handleSubmit = SubmitHandler(
    cart,
    cartItem,
    setCart,
    onSubmit,
    setCartItem,
    setOpen
  );

  return (
    <Modal
      color="secondary"
      className="text-black"
      backdrop
      onClose={() => setOpen(!open)}
      isOpen={open}
    >
      <Modal.Title>Add new cart</Modal.Title>
      <p className=" font-light text-center text-xs">
        DummyJSON only accepts ID(generated automatically) and quantity.
      </p>

      <Modal.Body>
        {cartItem.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className=" text-neutral text-center justify-center">
              Item <span className="font-bold">#{index + 1}</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Input
                color="secondary"
                label="Quantity"
                placeholder="Enter quantity"
                type="number"
                value={item.quantity}
                onChange={(event) =>
                  handleItemChange(index, Number(event.target.value))
                }
              />
            </div>
            <Button
              ghost
              className="my-2 ml-auto justify-end text-end flex"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button ghost className="" onClick={handleAddItem}>
          Add item
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <div className=" flex flex-col mx-auto gap-y-2">
          <Modal.Button className="btn-success" onClick={handleSubmit}>
            Submit
          </Modal.Button>
          <Modal.Button className="btn-error" onClick={() => setOpen(!open)}>
            Close
          </Modal.Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToCartModal;
