import styled from 'styled-components'
import { darken } from 'polished'
import { rotate } from '../../styles/animations'

export const ImageStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-bottom: 1rem;
  .dropzone {
    width: 5rem;
    height: 5rem;
    text-align: center;
    border: 1px solid ${props => props.theme.grey[2]};
    margin: 0.5rem auto;
    cursor: pointer;
    &:hover {
      outline: 3px solid ${props => darken(0.2, props.theme.primary)};
    }
    input[type='file'] {
      display: none;
    }
  }
  span {
    background: ${props => props.theme.black};
    color: white;
    border-left: 5px solid ${props => props.theme.secondary};
    padding: 0 1rem 0 0.5rem;
  }
  img {
    width: 5rem;
    height: 5rem;
    border: 1px solid ${props => props.theme.grey[2]};
    background: white;
  }
  button {
    background: none;
    border: none;
    outline: none;
    font-size: 2rem;
    margin-right: 1rem;
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
      animation: ${rotate} 1s linear infinite;
      color: ${props => darken(0.1, props.theme.secondary)};
    }
  }
  span.add {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: black;
    border: none;
    font-size: 2rem;
    padding: 0;
    svg {
      width: 3rem;
      height: 3rem;
      animation: ${rotate} 1s linear infinite;
      color: ${props => darken(0.1, props.theme.secondary)};
    }
  }
`
