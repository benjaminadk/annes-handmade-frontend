import { Query } from 'react-apollo'
import { SINGLE_PRODUCT_QUERY } from '../../apollo/query/product'
import HeadWithProduct from '../Head/HeadWithProduct'
import ProductDetail from './ProductDetail'
import Thumbnails from './Thumbnails'
import LargeImage from './LargeImage'
import Loading from '../Loading'
import DisplayError from '../DisplayError'
import { ProductStyles } from './styles/Product'

export default function Product({ query: { id }, user }) {
  return (
    <Query query={SINGLE_PRODUCT_QUERY} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loading size={10} message="Loading Product" />
        }
        if (error) {
          return <DisplayError error={error} />
        }
        const { product, thumbIndex } = data
        return (
          <ProductStyles>
            <HeadWithProduct product={product} />
            <Thumbnails images={product.images} thumbIndex={thumbIndex} />
            <LargeImage image={product.images[thumbIndex]} />
            <ProductDetail product={product} user={user} />
          </ProductStyles>
        )
      }}
    </Query>
  )
}
