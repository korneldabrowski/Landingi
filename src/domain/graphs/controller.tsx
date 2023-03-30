import { useCart } from 'infrastructure/context/CartContext';

import { CustomTick } from './components/CustomTick';
import DoubleLineGraph from './components/DoubleLineGraph';

export function Controller() {
  const cart = useCart();

  const data = cart.products.map((product) => {
    return {
      name: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
    };
  });

  return (
    <>
      <DoubleLineGraph
        tick={<CustomTick />}
        data={data}
        xDataKey="price"
        yDataKey="discountedPrice"
      />
    </>
  );
}
