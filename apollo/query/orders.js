import gql from 'graphql-tag'

export const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        description
        images
        price
        variant
        bead
      }
    }
  }
`
