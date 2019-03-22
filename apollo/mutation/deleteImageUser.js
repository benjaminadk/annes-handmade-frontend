import gql from 'graphql-tag'

export const DELETE_IMAGE_USER_MUTATION = gql`
  mutation DELETE_IMAGE_USER_MUTATION($id: ID!, $url: String!) {
    deleteImageUser(id: $id, url: $url) {
      message
    }
  }
`
