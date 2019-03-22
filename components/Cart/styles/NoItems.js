import styled from 'styled-components'
import { logoEyesOpen, logoEyesClosed } from '../../../config'

export const NoItemsStyles = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  .content {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.primary};
    padding: 2rem;
    .message {
      align-self: flex-start;
      font-size: 4rem;
    }
    .logo {
      align-self: center;
      width: 10rem;
      height: 10rem;
      background-image: url(${logoEyesClosed});
      background-repeat: no-repeat;
      background-size: cover;
      &:hover {
        background-image: url(${logoEyesOpen});
      }
    }
  }
`
