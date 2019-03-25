import { Query } from 'react-apollo'
import NextSeo from 'next-seo'
import { SINGLE_PRODUCT_QUERY } from '../../apollo/query/product'
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
          <>
            <NextSeo
              config={{
                title: product.title,
                canonical: `https://anneshandmade.herokuapp.com/product?id=${id}`,
                openGraph: {
                  title: `Anne's Handmade | ${product.title}`,
                  url: `https://anneshandmade.herokuapp.com/product?id=${id}`,
                  images: [
                    {
                      url: product.images[0],
                      width: 800,
                      height: 800,
                      alt: product.title
                    }
                  ]
                }
              }}
            />
            <ProductStyles>
              <Thumbnails images={product.images} thumbIndex={thumbIndex} />
              <LargeImage image={product.images[thumbIndex]} />
              <ProductDetail product={product} user={user} />
            </ProductStyles>
          </>
        )
      }}
    </Query>
  )
}
