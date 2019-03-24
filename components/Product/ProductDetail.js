import { Mutation } from 'react-apollo'
import Router from 'next/router'
import formatMoney from '../../lib/formatMoney'
import { ProductDetailStyles, Title, Description, Price } from './styles/ProductDetail'
import { GreenButton } from '../styles/GreenButton'
import TypeThumb from './TypeThumb'
import DisplayError from '../DisplayError'
import Toast from '../Toast'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { ADD_TO_CART_MUTATION } from '../../apollo/mutation/addToCart'

export default class ProductDetail extends React.Component {
  state = {
    showToast: false,
    messageToast: ''
  }

  handleAddToCart = async (addToCart, user, title) => {
    if (!user) {
      Router.push('/signup')
    } else {
      const res = await addToCart()
      this.setState({ showToast: true, messageToast: `${title} added to Cart!` }, () =>
        this.setState({ showToast: false })
      )
    }
  }

  render() {
    const {
      props: { product, user },
      state: { showToast, messageToast }
    } = this
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id: product.id }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <ProductDetailStyles>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <div className="properties">
              <Price>{formatMoney(product.price)}</Price>
              <TypeThumb variant="product" type={product.variant} />
              <TypeThumb variant="bead" type={product.bead} />
              <DisplayError error={error} />
            </div>
            <GreenButton onClick={() => this.handleAddToCart(addToCart, user, product.title)}>
              Add{loading && 'ing'} To Cart
            </GreenButton>
            <Toast show={showToast} message={messageToast} delay={8000} />
          </ProductDetailStyles>
        )}
      </Mutation>
    )
  }
}
