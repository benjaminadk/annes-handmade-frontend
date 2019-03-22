import styled from 'styled-components'
import { darken } from 'polished'

export const InputStyles = styled.label`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-bottom: 2rem;
  & > strong {
    width: 80%;
    background: ${props => props.theme.black};
    color: white;
    border-left: 5px solid ${props => props.theme.secondary};
    padding: 0 1rem 0 0.5rem;
    text-align: center;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-family: 'Raleway';
    font-size: 1.5rem;
    border: 1px solid ${props => props.theme.black};
    &:focus {
      outline: 3px solid ${props => darken(0.2, props.theme.primary)};
    }
  }
`
