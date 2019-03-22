import Router from 'next/router'
import { Mutation } from 'react-apollo'
import formatMoney from '../../lib/formatMoney'
import { ADD_TO_CART_MUTATION } from '../../apollo/mutation/addToCart'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { Container, Image, Actions, Action, Title, Price, Error } from './styles/ProductCard'
import DisplayError from '../DisplayError'

export default class ProductCart extends React.Component {
  onClick = () => {
    const id = this.props.product.id
    Router.push({ pathname: '/product', query: { id } })
  }

  handleAddToCart = (addToCart, user) => {
    if (!user) {
      Router.push('/signup')
    } else {
      addToCart()
    }
  }

  render() {
    const {
      props: { product, user }
    } = this
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id: product.id }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <Container>
            <Image src={product.images[0]} alt={product.title} onClick={this.onClick} />
            <Title onClick={this.onClick}>{product.title}</Title>
            <Price>{formatMoney(product.price)}</Price>
            <Actions>
              <Action onClick={this.onClick} title="Product Details">
                🔎
              </Action>
              <Action
                onClick={() => this.handleAddToCart(addToCart, user)}
                title="Add To Cart"
                disabled={loading}
              >
                {loading ? '💬' : error ? '🚫' : '🛒'}
              </Action>
            </Actions>
            <Error>
              <DisplayError error={error} />
            </Error>
          </Container>
        )}
      </Mutation>
    )
  }
}
