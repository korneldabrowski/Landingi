/**
 * Calculates the discounted price based on a given discount and original price.
 *
 * @param {number} discount - The percentage discount to apply.
 * @param {number} price - The original price to apply the discount to.
 * @returns {number} The discounted price.
 *
 * @example
 * const discountedPrice = countDiscount(20, 100);
 * console.log(discountedPrice); // 80
 */
export default function countDiscount(discount: number, price: number): number {
  return Number((price - (price * discount) / 100).toFixed(2));
}
