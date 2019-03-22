import { CheckoutButton } from './styles/CheckoutButton'
import { CartFooterStyles } from './styles/CartFooter'
import Checkout from './Checkout'

export default function CartFooter({ cart, email, subTotal, tax, total }) {
  return (
    <CartFooterStyles cart={Boolean(cart.length)}>
      <div className="totals">
        <div>Subtotal: {subTotal}</div>
        <div>Tax: {tax}</div>
        <div>{total}</div>
      </div>
      {cart.length ? (
        <Checkout cart={cart} email={email}>
          <CheckoutButton>Checkout</CheckoutButton>
        </Checkout>
      ) : null}
    </CartFooterStyles>
  )
}
