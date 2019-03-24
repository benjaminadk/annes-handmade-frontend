import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'
import Router from 'next/router'
import NProgress from 'nprogress'
import calcTotalPrice from '../../lib/calcTotalPrice'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { TOGGLE_CART_MUTATION } from '../../apollo/mutation/toggleCart'
import { ALL_PRODUCTS_QUERY } from '../../apollo/query/products'
import { CREATE_ORDER_MUTATION } from '../../apollo/mutation/createOrder'
import { stripeKey } from '../../config'

const Composed = adopt({
  createOrder: ({ render }) => (
    <Mutation
      mutation={CREATE_ORDER_MUTATION}
      refetchQueries={[
        { query: CURRENT_USER_QUERY },
        { query: ALL_PRODUCTS_QUERY, variables: { skip: 0, where: { sold: false } } }
      ]}
    >
      {render}
    </Mutation>
  ),
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
})

export default class Checkout extends React.Component {
  onToken = async (stripe, args, createOrder, toggleCart) => {
    NProgress.start()

    const res = await createOrder({
      variables: {
        token: stripe.id,
        data: {
          name: args.shipping_name,
          street: args.shipping_address_line1,
          city: args.shipping_address_city,
          state: args.shipping_address_state || '',
          zip: args.shipping_address_zip
        }
      }
    })

    await toggleCart()

    Router.push({
      pathname: '/order',
      query: { id: res.data.createOrder.id }
    })
  }

  render() {
    const {
      props: { cart, email, children }
    } = this
    return (
      <Composed>
        {({ toggleCart, createOrder }) => (
          <StripeCheckout
            amount={calcTotalPrice(cart, 0.08)}
            name="Anne's Handmade"
            description={`Order of ${cart.length} item${cart.length === 1 ? '' : 's'}!`}
            image="https://s3-us-west-1.amazonaws.com/shopping-site/assets/buddha-logo.png"
            panelLabel="Buy Stuff 💎"
            stripeKey={stripeKey}
            currency="USD"
            email={email}
            shippingAddress
            billingAddress
            token={(stripe, args) => this.onToken(stripe, args, createOrder, toggleCart)}
          >
            {children}
          </StripeCheckout>
        )}
      </Composed>
    )
  }
}
