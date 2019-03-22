export default (cart, taxRate) => {
  const subTotal = cart.reduce((acc, cartItem) => acc + cartItem.product.price, 0)
  const tax = subTotal * taxRate
  return subTotal + tax
}
