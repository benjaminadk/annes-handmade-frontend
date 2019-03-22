import styled from 'styled-components'
import { darken } from 'polished'

export const Header = styled.div`
  font-weight: bold;
  font-size: 1.75rem;
  padding: 0.5rem 0;
`

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-size: 2rem;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .ids {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
  strong {
    font-size: 2rem;
  }
  img {
    border: 1px solid ${props => props.theme.grey[2]};
    margin-right: 1rem;
  }
  a:hover {
    color: ${props => darken(0.2, props.theme.primary)};
    text-decoration: underline;
  }
`
