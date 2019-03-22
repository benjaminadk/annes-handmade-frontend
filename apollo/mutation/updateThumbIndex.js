import gql from 'graphql-tag'

export const THUMB_INDEX_MUTATION = gql`
  mutation THUMB_INDEX_MUTATION($index: Int!) {
    updateThumbIndex(index: $index) @client
  }
`
