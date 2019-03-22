import { BEAD_TYPES } from '../../lib/catalogHelpers'
import { Title, Container, Tile } from './styles'

export default function BeadTypes({ onClick }) {
  return (
    <>
      <Title>
        <div>Bead Types</div>
      </Title>
      <Container>
        {BEAD_TYPES.map(el => (
          <Tile key={el.name} onClick={() => onClick(el.name.toUpperCase().replace(/\s/g, '_'))}>
            <div className="display">
              <img src={el.src} />
              <span className="label">{el.name}</span>
            </div>
            <div className="overlay">
              <span>{el.quality}</span>
            </div>
          </Tile>
        ))}
      </Container>
    </>
  )
}
