import gql from 'graphql-tag'

export const SIGNUP_QUERY = gql`
  query {
    showSignup @client
  }
`
