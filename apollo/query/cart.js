import gql from 'graphql-tag'

export const CART_QUERY = gql`
  query {
    cartOpen @client
  }
`
