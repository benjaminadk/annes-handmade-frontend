import gql from 'graphql-tag'

export const GOOGLE_SIGNUP_MUTATION = gql`
  mutation GOOGLE_SIGNUP_MUTATION($data: UserCreateInput) {
    googleSignup(data: $data) {
      id
    }
  }
`
