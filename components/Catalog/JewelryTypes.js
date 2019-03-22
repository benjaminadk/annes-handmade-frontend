import { JEWELRY_TYPES } from '../../lib/catalogHelpers'
import { Title, Container, Tile } from './styles'

export default function JewelryTypes({ onClick }) {
  return (
    <>
      <Title>
        <div>Jewelry Types</div>
      </Title>
      <Container>
        {JEWELRY_TYPES.map((el, i) => {
          const variant = i === 0 ? null : el.name.toUpperCase()
          return (
            <Tile key={el.name} onClick={() => onClick(variant)}>
              <div className="display">
                <img src={el.src} />
                <span className="label">{el.name}</span>
              </div>
              <div className="overlay">
                <span>{el.name}</span>
              </div>
            </Tile>
          )
        })}
      </Container>
    </>
  )
}
