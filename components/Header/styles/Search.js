import styled, { keyframes } from 'styled-components'
import media from '../../styles/media'
import { lighten, darken } from 'polished'

const glow = keyframes`
  from {
    box-shadow: 0 0 5px 1px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

export const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 1.75rem;
    font-family: 'Raleway';
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background-image: url('https://s3-us-west-1.amazonaws.com/shopping-site/assets/close.png');
      background-size: cover;
    }
  }
  ${media.phone`
    display: none;
  `}
`

export const DropDown = styled.div`
  position: absolute;
  width: 100%;
  max-height: 50rem;
  overflow-y: auto;
  z-index: 2;
  border: 3px solid ${props => props.theme.grey[2]};
`

export const DropDownItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 1fr;
  border-left: 10px solid ${props => (props.highlighted ? props.theme.secondary : 'white')};
  border-bottom: 1px solid ${props => props.theme.grey[2]};
  background: ${props => (props.highlighted ? lighten(0.2, props.theme.secondary) : 'white')};
  background: ${props => (props.highlighted ? props.theme.black : 'white')};
  color: ${props => (props.highlighted ? 'white' : props.theme.black)};
  font-size: 1.75rem;
  padding: 1rem 1rem 1rem 2rem;
  transition: all 0.2s;
  cursor: pointer;
  img {
    width: 5rem;
    height: 5rem;
    margin-right: 20px;
    border: 1px solid ${props => props.theme.grey[2]};
  }
  span {
    color: ${props => darken(0.2, props.theme.primary)};
    margin-left: 0.5rem;
  }
`
