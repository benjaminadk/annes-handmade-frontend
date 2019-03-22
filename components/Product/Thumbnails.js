import { Mutation } from 'react-apollo'
import { THUMB_INDEX_MUTATION } from '../../apollo/mutation/updateThumbIndex'
import { ThumbnailsStyles, Thumbnail } from './styles/Thumbnails'

export default function Thumbnails({ images, thumbIndex }) {
  return (
    <Mutation mutation={THUMB_INDEX_MUTATION}>
      {updateThumbIndex => (
        <ThumbnailsStyles>
          {images.map((el, i) => (
            <Thumbnail
              key={el}
              image={el}
              selected={thumbIndex === i}
              onClick={() => updateThumbIndex({ variables: { index: i } })}
            />
          ))}
        </ThumbnailsStyles>
      )}
    </Mutation>
  )
}
