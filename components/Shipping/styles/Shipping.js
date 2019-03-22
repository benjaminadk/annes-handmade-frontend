import styled from 'styled-components'
import media from '../../styles/media'

export const ShippingStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: calc(100vh - 15rem);
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      border-bottom: 1px solid ${props => props.theme.grey[2]};
      width: 75%;
      ${media.phone`
        width: 100%;
      `}
    }
    p {
      width: 75%;
      text-align: justify;
      ${media.phone`
        width: 100%;
      `}
    }
  }
`
