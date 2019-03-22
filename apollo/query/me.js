import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      image
      role
      cart {
        id
        product {
          id
          title
          images
          price
          variant
          bead
        }
      }
      orders {
        id
        charge
        total
        shipped
        createdAt
        items {
          id
          images
        }
      }
    }
  }
`
