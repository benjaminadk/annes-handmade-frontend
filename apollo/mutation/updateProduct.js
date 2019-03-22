import gql from 'graphql-tag'

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION($id: ID!, $data: ProductUpdateInput!) {
    updateProduct(id: $id, data: $data) {
      id
    }
  }
`
