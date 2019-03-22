import styled from 'styled-components'
import media from '../../styles/media'

export const CartButtonStyles = styled.div`
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  background: none;
  font-size: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  ${media.phone`
    grid-template-columns: auto;
  `}
  span:first-child {
    margin-right: 1rem;
    font-size: 3rem;
    ${media.phone`
      display: none;
    `}
  }
`
