import gql from 'graphql-tag'

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION($data: ProductCreateInput!) {
    createProduct(data: $data) {
      id
    }
  }
`
