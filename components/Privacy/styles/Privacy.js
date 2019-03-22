import styled from 'styled-components'
import media from '../../styles/media'

export const PrivacyStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: grid;
  justify-items: center;
  padding: 2rem;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    h2 {
      border-bottom: 1px solid ${props => props.theme.grey[2]};
      width: 75%;
      ${media.phone`width: 100%; font-size: 1.75rem;`}
    }
    p {
      width: 75%;
      text-align: justify;
      ${media.phone`width: 100%; font-size: 1.25rem;`}
    }
  }
`
