import styled from 'styled-components'
import { darken } from 'polished'
import { rotate } from '../../styles/animations'

export const ImageUserStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 2rem;
  .dropzone {
    width: 5rem;
    height: 5rem;
    text-align: center;
    border: 1px solid ${props => props.theme.grey[2]};
    cursor: pointer;
    &:hover {
      outline: 3px solid ${props => darken(0.2, props.theme.primary)};
    }
    input[type='file'] {
      display: none;
    }
  }
  img {
    width: 5rem;
    height: 5rem;
    justify-self: center;
  }
  .add {
    justify-self: center;
    width: 5rem;
    height: 5rem;
    display: grid;
    justify-items: center;
    align-items: center;
    svg {
      width: 4rem;
      height: 4rem;
      animation: ${rotate} 1s linear infinite;
      color: ${props => darken(0.1, props.theme.secondary)};
    }
  }
  .x {
    justify-self: center;
    cursor: pointer;
    svg {
      width: 3rem;
      height: 3rem;
      animation: ${rotate} 1s linear infinite;
      color: ${props => darken(0.1, props.theme.secondary)};
    }
  }
`
