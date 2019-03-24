import AddImageUser from './AddImageUser'
import DeleteImageUser from './DeleteImageUser'

export default function Image({ image, onClick, onChange }) {
  if (image) {
    return <DeleteImageUser image={image} onClick={onClick} />
  } else {
    return <AddImageUser title="Add User Image" onChange={onChange} />
  }
}
