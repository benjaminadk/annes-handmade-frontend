import gql from 'graphql-tag'

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(id: $id) {
      id
      title
      description
      variant
      bead
      images
      price
    }
    thumbIndex @client
  }
`
