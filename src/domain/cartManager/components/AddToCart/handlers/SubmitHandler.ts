import { CartType, Product } from '@infrastructure/api/basket';
import { defaultCart } from '../defaults';

export function SubmitHandler(
  cart: CartType,
  cartItem: Product[],
  setCart: React.Dispatch<React.SetStateAction<CartType>>,
  onSubmit: (_data: CartType) => void,
  setCartItem: React.Dispatch<React.SetStateAction<Product[]>>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedCart = {
      ...cart,
      products: [...cartItem],
    };
    setCart(updatedCart);

    if (!updatedCart.products || updatedCart.products.length === 0) {
      alert('Something went wrong!');
      return;
    }

    const isValid = updatedCart.products.every(
      (item) => item.quantity && item.id && item.quantity > 0 && item.id > 0
    );

    if (isValid) {
      onSubmit(updatedCart);
      setCartItem([]);
      setCart(defaultCart);
      setOpen(false);
    } else {
      alert('Please fill out all fields before submitting!');
    }
  };
}
