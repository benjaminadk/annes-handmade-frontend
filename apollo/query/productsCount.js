import gql from 'graphql-tag'

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($where: ProductWhereInput) {
    productsCount(where: $where) {
      count
    }
  }
`
