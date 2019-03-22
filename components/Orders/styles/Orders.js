import styled from 'styled-components'
import { lighten, darken } from 'polished'
import media from '../../styles/media'

export const OrderStyle = styled.div`
  display: grid;
  padding: 2rem;
`

export const OrderTitle = styled.div`
  justify-self: center;
  width: 50%;
  font-size: 3rem;
  text-align: center;
  background: ${props => props.theme.black};
  color: white;
  border-left: 10px solid ${props => props.theme.secondary};
  padding: 1rem 2rem;
  ${media.tablet`
    width: 100%;
  `}
`

export const OrderGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  margin-top: 2rem;
  ${media.tablet`
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`
export const OrderItem = styled.div`
  padding: 2rem;
  border: 1px solid ${props => props.theme.grey[2]};
  background: ${props => props.theme.grey[0]};
  &:hover {
    outline: 2px solid ${props => props.theme.grey[5]};
  }
  ${media.phone`
    padding: 1rem;
  `}
  .data {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-gap: 1rem;
    text-align: center;
    p {
      margin: 0;
      padding: 1rem 0;
      background: ${props => lighten(0.2, props.theme.secondary)};
      border: 1px solid ${props => lighten(0.1, props.theme.secondary)};
    }
  }
  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
      border: 1px solid ${props => props.theme.grey[2]};
    }
  }
`
