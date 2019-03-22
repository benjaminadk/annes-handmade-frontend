import styled from 'styled-components'
import media from '../styles/media'

export const GreenButton = styled.button`
  font-family: 'Raleway';
  font-size: 2.5rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.grey[12]};
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: ${props => props.theme.bs};
  }
  ${media.phone`
    font-size: 2rem;
  `}
`
