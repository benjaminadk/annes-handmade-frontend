import gql from 'graphql-tag'

export const TOGGLE_SHOW_SIGNUP_MUTATION = gql`
  mutation($show: String!) {
    toggleSignup(show: $show) @client
  }
`
