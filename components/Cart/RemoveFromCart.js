import { Mutation } from 'react-apollo'
import { Close } from 'styled-icons/material/Close'
import { REMOVE_FROM_CART_MUTATION } from '../../apollo/mutation/removeFromCart'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { RemoveButton } from './styles/RemoveButton'

export default class RemoveFromCart extends React.Component {
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    // 2. remove clicked item from the cart
    const cartItemId = payload.data.removeFromCart.id
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId)

    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  }

  onRemoveClick = async removeFromCart => {
    const { title } = this.props
    const approval = confirm(`Are you sure you want to remove ${title} from your cart?`)
    if (approval) {
      removeFromCart()
    }
  }

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id
          }
        }}
      >
        {(removeFromCart, { loading }) => (
          <RemoveButton
            disabled={loading}
            onClick={() => this.onRemoveClick(removeFromCart)}
            title="Remove Item"
          >
            {loading ? '💬' : <Close size={25} />}
          </RemoveButton>
        )}
      </Mutation>
    )
  }
}
