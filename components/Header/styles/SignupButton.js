import styled from 'styled-components'
import media from '../../styles/media'

export const SignupButtonStyles = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  ${media.phone`
    grid-column: ${props => (!!props.user ? '3 / 4' : '3 / 5')};
  `}
  button {
    width: 75%;
    font-size: 1.75rem;
    font-weight: bold;
    padding: 10px 0;
    background: ${props => props.theme.grey[12]};
    color: ${props => props.theme.grey[0]};
    border: none;
    border-left: 5px solid ${props => props.theme.secondary};
    outline: none;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.black};
    }
  }
`

export const Avatar = styled.div`
  align-self: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.black};
  display: grid;
  place-items: center center;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  background: ${props => props.theme.black};
  color: ${props => props.theme.grey[0]};
  cursor: pointer;
  overflow: hidden;
  img {
    width: 5.5rem;
    height: 5.5rem;
  }
`
