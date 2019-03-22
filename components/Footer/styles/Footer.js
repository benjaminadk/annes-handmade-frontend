import styled from 'styled-components'

export const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${props => props.theme.grey[12]};
  height: 100px;
  .info {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    font-size: 2rem;
  }
  .info > a {
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.grey[0]};
    }
  }
  .social {
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }
`
