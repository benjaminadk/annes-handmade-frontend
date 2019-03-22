import { Mutation } from 'react-apollo'
import Router from 'next/router'
import formatMoney from '../../lib/formatMoney'
import { ProductDetailStyles, Title, Description, Price } from './styles/ProductDetail'
import { GreenButton } from '../styles/GreenButton'
import TypeThumb from './TypeThumb'
import DisplayError from '../DisplayError'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { ADD_TO_CART_MUTATION } from '../../apollo/mutation/addToCart'

export default class ProductDetail extends React.Component {
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
          <ProductDetailStyles>
            <Title>{product.title}</Title>
            {error ? (
              <DisplayError error={error} />
            ) : (
              <Description>{product.description}</Description>
            )}
            <div className="properties">
              <Price>{formatMoney(product.price)}</Price>
              <TypeThumb variant="product" type={product.variant} />
              <TypeThumb variant="bead" type={product.bead} />
            </div>
            <GreenButton onClick={() => this.handleAddToCart(addToCart, user)}>
              Add{loading && 'ing'} {product.title} to Cart
            </GreenButton>
          </ProductDetailStyles>
        )}
      </Mutation>
    )
  }
}
