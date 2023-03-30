import { Product } from '@infrastructure/api/basket';

export function ItemChangeHandler(
  setCartItem: React.Dispatch<React.SetStateAction<Product[]>>
) {
  return (index: number, value: number): void => {
    console.log(index, value);
    setCartItem((prevCartItem) => {
      const newCartItems = [...prevCartItem];
      newCartItems[index].quantity = value;
      return newCartItems;
    });
  };
}
