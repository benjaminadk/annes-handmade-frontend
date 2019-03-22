import gql from 'graphql-tag'

export const ADD_IMAGE_MUTATION = gql`
  mutation ADD_IMAGE_MUTATION($id: ID, $filename: String!, $filetype: String!) {
    addImage(id: $id, filename: $filename, filetype: $filetype) {
      url
      image
    }
  }
`
