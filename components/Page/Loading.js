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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => lighten(0.35, props.theme.primary)};
  svg {
    width: 15rem;
    height: 15rem;
    color: ${props => darken(0.2, props.theme.secondary)};
    animation: ${rotate} 1s linear infinite;
  }
  .message {
    font-family: 'Raleway';
    font-size: 3rem;
    margin-top: 3rem;
  }
`

export default function Loading() {
  return (
    <LoadingStyles>
      <Spinner />
      <div className="message">Waking up Heroku Dynos...</div>
    </LoadingStyles>
  )
}
