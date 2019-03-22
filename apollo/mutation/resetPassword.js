import gql from 'graphql-tag'

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
    $pwd: Int
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
      pwd: $pwd
    ) {
      id
      email
      name
    }
  }
`
