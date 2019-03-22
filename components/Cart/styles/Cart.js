import styled from 'styled-components'
import media from '../../styles/media'

export const CartStyles = styled.div`
  position: fixed;
  min-width: 500px;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: ${props => props.theme.grey[0]};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.5s ease-out;
  ${media.phone`
    min-width: 350px;
  `}
  ul {
    background: ${props => props.theme.grey[1]};
    margin: 0;
    padding: 0 2rem;
    list-style: none;
    overflow: auto;
  }
`
