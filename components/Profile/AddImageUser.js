import { useRef } from 'react'
import { Mutation } from 'react-apollo'
import { Spinner10 as Spinner } from 'styled-icons/icomoon/Spinner10'
import { ADD_IMAGE_USER_MUTATION } from '../../apollo/mutation/addImageUser'
import { ImageUserStyles } from './styles/ImageUser'

export default function AddImageUser({ onChange }) {
  const inputRef = useRef(null)
  return (
    <Mutation mutation={ADD_IMAGE_USER_MUTATION}>
      {(addImageUser, { loading }) => (
        <ImageUserStyles>
          <div>Image</div>
          <div className="dropzone" onClick={() => inputRef.current.click()}>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple={false}
              onChange={e => onChange(e, addImageUser)}
            />
            <span className="add">{loading ? <Spinner /> : '➕'}</span>
          </div>
          <div>🚫</div>
        </ImageUserStyles>
      )}
    </Mutation>
  )
}
