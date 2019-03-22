import styled from 'styled-components'
import { darken } from 'polished'

export const CloseButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 3rem;
  right: 0rem;
  background: ${props => props.theme.black};
  color: ${props => props.theme.secondary};
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${props => darken(0.2, props.theme.secondary)};
  }
`
