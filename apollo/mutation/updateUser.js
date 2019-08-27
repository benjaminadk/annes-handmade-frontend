import gql from 'graphql-tag'

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
    }
  }
`
