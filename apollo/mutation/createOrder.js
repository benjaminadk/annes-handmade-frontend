import gql from 'graphql-tag'

export const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!, $data: AddressCreateInput!) {
    createOrder(token: $token, data: $data) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`
