import { JEWELRY_TYPES, BEAD_TYPES } from '../../lib/catalogHelpers'
import { TypeThumb } from './styles/TypeThumb'

export default function TypeThumbnail({ variant, type }) {
  if (variant === 'product') {
    const product = JEWELRY_TYPES.find(el => el.name.toUpperCase() === type)
    return <TypeThumb src={product.src} title={type} />
  } else {
    const bead = BEAD_TYPES.find(el => el.name.toUpperCase().replace(/\s/g, '_') === type)
    return <TypeThumb src={bead.src} title={type} />
  }
}
