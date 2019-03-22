import styled from 'styled-components'
import { darken } from 'polished'
import media from '../../styles/media'

export const InputStyles = styled.label`
  display: block;
  margin-bottom: 2rem;
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 1px solid ${props => props.theme.black};
    &:focus {
      outline: 3px solid ${props => darken(0.2, props.theme.primary)};
    }
    ${media.phone`
      width: ${props => props.width || '100%'};
    `}
  }
`
