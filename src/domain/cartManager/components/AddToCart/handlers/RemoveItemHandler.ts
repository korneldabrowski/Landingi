import { Product } from '@infrastructure/api/basket';

export function RemoveItemHandler(
  cartItem: Product[],
  setCartItem: React.Dispatch<React.SetStateAction<Product[]>>
) {
  return (index: number) => {
    const newCartItem = [...cartItem];
    newCartItem.splice(index, 1);
    setCartItem(newCartItem);
  };
}
