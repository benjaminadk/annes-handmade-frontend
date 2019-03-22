import gql from 'graphql-tag'

export const ADD_IMAGE_USER_MUTATION = gql`
  mutation ADD_IMAGE_USER_MUTATION($id: ID!, $filename: String!, $filetype: String!) {
    addImageUser(id: $id, filename: $filename, filetype: $filetype) {
      url
      image
    }
  }
`
