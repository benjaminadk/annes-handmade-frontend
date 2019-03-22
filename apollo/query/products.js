import gql from 'graphql-tag'
import { perPage } from '../../config'

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $where: ProductWhereInput, $orderBy: ProductOrderByInput = title_ASC) {
    products(skip: $skip, first: $first, where: $where, orderBy: $orderBy) {
      id
      title
      description
      images
      price
      variant
      bead
    }
  }
`
