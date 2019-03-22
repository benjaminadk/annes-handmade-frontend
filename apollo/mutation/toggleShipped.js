import gql from 'graphql-tag'

export const SHIPPED_MUTATION = gql`
  mutation SHIPPED_MUTATION($id: ID!, $shipped: Boolean!) {
    toggleShipped(id: $id, shipped: $shipped) {
      message
    }
  }
`
