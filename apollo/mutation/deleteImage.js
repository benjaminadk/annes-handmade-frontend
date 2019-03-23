import gql from 'graphql-tag'

export const DELETE_IMAGE_MUTATION = gql`
  mutation DELETE_IMAGE_MUTATION($id: ID, $url: String!) {
    deleteImage(id: $id, url: $url) {
      success
      message
    }
  }
`
