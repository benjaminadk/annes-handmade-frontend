import gql from 'graphql-tag'

export const SALES_QUERY = gql`
  query SALES_QUERY {
    sales {
      id
      charge
      total
      shipped
      createdAt
      items {
        id
        title
        description
        images
        price
        variant
        bead
      }
      shipping {
        id
        name
        street
        city
        state
        zip
      }
      user {
        id
        name
        email
        image
      }
    }
  }
`
