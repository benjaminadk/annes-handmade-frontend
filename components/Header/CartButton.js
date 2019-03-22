import { Mutation } from 'react-apollo'
import { TOGGLE_CART_MUTATION } from '../../apollo/mutation/toggleCart'
import { CartButtonStyles } from './styles/CartButton'
import CartCount from './CartCount'

export default function CartButton({ count }) {
  return (
    <Mutation mutation={TOGGLE_CART_MUTATION}>
      {toggleCart => (
        <CartButtonStyles onClick={toggleCart}>
          <span>Cart</span>
          <CartCount count={count} />
        </CartButtonStyles>
      )}
    </Mutation>
  )
}
