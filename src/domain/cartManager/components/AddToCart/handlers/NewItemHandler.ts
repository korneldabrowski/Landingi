import { Product } from '@infrastructure/api/basket';

export function NewItemHandler(
  cartItem: Product[],
  setCartItem: React.Dispatch<React.SetStateAction<Product[]>>
) {
  return () => {
    const newItem: Product = {
      id: Math.floor(Math.random() * 29 + 1),
      quantity: 1,
    };

    // Check if the newly generated ID is already in the existing items
    const ids = cartItem.map((item) => item.id);
    while (ids.includes(newItem.id)) {
      newItem.id = Math.floor(Math.random() * 29 + 1);
    }

    setCartItem((prevCartItem) => [...prevCartItem, newItem]);
  };
}
