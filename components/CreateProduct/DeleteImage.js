import { Mutation } from 'react-apollo'
import { DELETE_IMAGE_MUTATION } from '../../apollo/mutation/deleteImage'
import { INVENTORY_QUERY } from '../../apollo/query/inventory'

export default function DeleteImage({ image, title, id, index, onClick }) {
  return (
    <>
      <span>{title}</span>
      <img src={image} />
      <Mutation
        mutation={DELETE_IMAGE_MUTATION}
        variables={{ id, url: image }}
        refetchQueries={[{ query: INVENTORY_QUERY }]}
        awaitRefetchQueries={true}
      >
        {(deleteImage, { loading }) => (
          <button onClick={e => onClick(e, deleteImage, index)} title="Delete image">
            {loading ? '💬' : '❌'}
          </button>
        )}
      </Mutation>
    </>
  )
}
