import styled, { keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
import { Spinner10 as Spinner } from 'styled-icons/icomoon/Spinner10'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingStyles = styled.div`
  width: 100%;
  height: calc(100vh - 7.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => lighten(0.2, props.theme.secondary)};
  svg {
    width: ${props => props.size}rem;
    height: ${props => props.size}rem;
    color: ${props => darken(0.1, props.theme.secondary)};
    animation: ${rotate} 1s linear infinite;
  }
  .message {
    font-size: 3rem;
    margin-top: 2rem;
  }
`

export default function Loading({ size, message }) {
  return (
    <LoadingStyles size={size}>
      <Spinner />
      <div className="message">{message}</div>
    </LoadingStyles>
  )
}
