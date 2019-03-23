import { ImageStyles } from './styles/Image'
import AddImage from './AddImage'
import DeleteImage from './DeleteImage'

export default function Image({ id, image, index, onClick, onChange }) {
  return (
    <ImageStyles>
      {image ? (
        <DeleteImage
          id={id}
          index={index}
          image={image}
          title={`Image ${index}`}
          onClick={onClick}
        />
      ) : (
        <AddImage index={index} title={`Image ${index}`} onChange={onChange} />
      )}
    </ImageStyles>
  )
}
