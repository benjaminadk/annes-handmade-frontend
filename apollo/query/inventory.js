import gql from 'graphql-tag'

export const INVENTORY_QUERY = gql`
  query INVENTORY_QUERY {
    products {
      id
      title
      description
      variant
      bead
      images
      price
      sold
      createdAt
    }
  }
`
