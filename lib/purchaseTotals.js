import formatMoney from './formatMoney'

export default (cart, taxRate) => {
  const subTotal = cart.reduce((acc, cartItem) => acc + cartItem.product.price, 0)
  const tax = subTotal * taxRate
  const total = subTotal + tax
  return [subTotal, tax, total].map(formatMoney)
}
