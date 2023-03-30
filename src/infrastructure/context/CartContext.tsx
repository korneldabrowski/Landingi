import { createContext, useContext, useReducer } from 'react';
import { CartType } from '@infrastructure/api/basket';

type CartAction = { type: 'SET_CART'; cart: CartType };

function cartReducer(cart: CartType, action: CartAction): CartType {
  switch (action.type) {
    case 'SET_CART':
      return action.cart;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialCart: CartType = {
  id: 1,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
};

const CartContext = createContext<CartType | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(
  null
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === null) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}
