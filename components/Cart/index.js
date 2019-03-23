import { Mutation, Query } from 'react-apollo'
import { adopt } from 'react-adopt'
import { CartStyles } from './styles/Cart'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItem from './CartItem'
import NoItems from './NoItems'
import purchaseTotals from '../../lib/purchaseTotals'
import { TOGGLE_CART_MUTATION } from '../../apollo/mutation/toggleCart'
import { CART_QUERY } from '../../apollo/query/cart'

const Composed = adopt({
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
  localState: ({ render }) => <Query query={CART_QUERY}>{render}</Query>
})

export default function Cart({ user: { name, cart, email } }) {
  const title = name[name.length - 1] === 's' ? `${name}' Cart` : `${name}'s Cart`
  const [subTotal, tax, total] = purchaseTotals(cart, 0.08)
  return (
    <Composed>
      {({ toggleCart, localState }) => {
        return (
          <CartStyles data-test="cart" open={localState.data.cartOpen}>
            <CartHeader title={title} toggleCart={toggleCart} />
            <ul>
              {cart.length ? cart.map(el => <CartItem key={el.id} cartItem={el} />) : <NoItems />}
            </ul>
            <CartFooter cart={cart} email={email} subTotal={subTotal} tax={tax} total={total} />
          </CartStyles>
        )
      }}
    </Composed>
  )
}
