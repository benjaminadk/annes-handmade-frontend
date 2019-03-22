import formatMoney from '../../lib/formatMoney'
import RemoveFromCart from './RemoveFromCart'
import { CartItemStyles } from './styles/CartItem'

export default function CartItem({ cartItem: { id, product } }) {
  return (
    <CartItemStyles>
      <img src={product.images[0]} />
      <div>
        <h3>{product.title}</h3>
        <p>
          <em>{formatMoney(product.price)}</em>
        </p>
      </div>
      <RemoveFromCart id={id} title={product.title} />
    </CartItemStyles>
  )
}
