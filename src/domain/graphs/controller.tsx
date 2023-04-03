import { useCart } from 'infrastructure/context/CartContext';

import { CustomTick } from './components/CustomTick';
import DoubleLineGraph from './components/DoubleLineGraph';
import countDiscount from './service/countDiscount';

export function Controller() {
  const cart = useCart();

  if (!cart.products) return null;

  const data = cart.products.map((product) => {
    if (!product.discountPercentage) return null;
    if (!product.price) return null;

    const discountedPricePerUnit = countDiscount(
      product.discountPercentage,
      product.price
    );

    return {
      name: product.title,
      price: product.price,
      discountedPrice: discountedPricePerUnit,
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
