import gql from 'graphql-tag'

export const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($term: String!) {
    products(
      where: { OR: [{ title_contains: $term }, { description_contains: $term }] }
      first: 15
    ) {
      id
      title
      images
    }
  }
`
