import { Mutation } from 'react-apollo'
import { Spinner10 as Spinner } from 'styled-icons/icomoon/Spinner10'
import { DELETE_IMAGE_USER_MUTATION } from '../../apollo/mutation/deleteImageUser'
import { ImageUserStyles } from './styles/ImageUser'

export default function DeleteImageUser({ image, onClick }) {
  return (
    <Mutation mutation={DELETE_IMAGE_USER_MUTATION}>
      {(deleteImageUser, { loading }) => (
        <ImageUserStyles>
          <span>Image</span>
          <img src={image} />
          <span className="x" onClick={() => onClick(deleteImageUser)}>
            {loading ? <Spinner /> : '❌'}
          </span>
        </ImageUserStyles>
      )}
    </Mutation>
  )
}
