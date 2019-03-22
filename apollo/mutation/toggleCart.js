import gql from 'graphql-tag'

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`
