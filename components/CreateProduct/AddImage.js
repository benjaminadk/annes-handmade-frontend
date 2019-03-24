import { useRef } from 'react'
import { Mutation } from 'react-apollo'
import { ADD_IMAGE_MUTATION } from '../../apollo/mutation/addImage'

export default function AddImage({ index, title, onChange }) {
  const inputRef = useRef(null)
  return (
    <>
      <span>{title}</span>
      <Mutation mutation={ADD_IMAGE_MUTATION}>
        {(addImage, { loading }) => (
          <div
            className="dropzone"
            title={`Image ${index}`}
            onClick={() => inputRef.current.click()}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple={false}
              onChange={e => onChange(e, addImage, index)}
            />
            <span className="add">{loading ? '💬' : '➕'}</span>
          </div>
        )}
      </Mutation>
      <button style={{ cursor: 'auto' }} disabled>
        🚫
      </button>
    </>
  )
}
