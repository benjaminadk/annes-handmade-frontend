import { useState } from 'react'
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
  const [seoProduct, setSeoProduct] = useState(null)
  return (
    <>
      <NextSeo
        config={{
          titleTemplate: `Anne's Handmade | %s`,
          title: seoProduct ? seoProduct.title : 'Product',
          canonical: `https://anneshandmade.herokuapp.com/product?id=${id}`,
          facebook: {
            appId: '2300738536877547'
          },
          openGraph: {
            type: 'website',
            title: `Anne's Handmade | ${
              seoProduct ? seoProduct.title : 'Product'
            }`,
            url: `https://anneshandmade.herokuapp.com/product?id=${id}`,
            description:
              'One of a kind, handmade jewelry @ affordable prices. 💎',
            site_name: "Anne's Handmade",
            images: [
              {
                url: seoProduct ? seoProduct.images[0] : '',
                width: 800,
                height: 800,
                alt: seoProduct ? seoProduct.title : 'Product'
              }
            ]
          }
        }}
      />

      <Query query={SINGLE_PRODUCT_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) {
            return <Loading size={10} message='Loading Product' />
          }
          if (error) {
            return <DisplayError error={error} />
          }
          const { product, thumbIndex } = data
          setSeoProduct(product)
          return (
            <ProductStyles>
              <Thumbnails images={product.images} thumbIndex={thumbIndex} />
              <LargeImage image={product.images[thumbIndex]} />
              <ProductDetail product={product} user={user} />
            </ProductStyles>
          )
        }}
      </Query>
    </>
  )
}
