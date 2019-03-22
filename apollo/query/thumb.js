import gql from 'graphql-tag'

export const THUMB_QUERY = gql`
  query {
    thumbIndex @client
  }
`
