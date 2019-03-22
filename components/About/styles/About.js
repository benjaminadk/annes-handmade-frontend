import styled from 'styled-components'
import { darken } from 'polished'
import media from '../../styles/media'

export const AboutStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  .top {
    img {
      width: 20rem;
    }
  }
  .bottom {
    display: grid;
    justify-items: center;
    .about {
      font-size: 4rem;
    }
    p {
      width: 50%;
      text-align: justify;
      ${media.phone`
        width: 90%;
      `}
    }
    a {
      color: ${props => darken(0.1, props.theme.primary)};
      transition: 0.3s;
      &:hover {
        color: ${props => darken(0.2, props.theme.primary)};
      }
    }
    .signature {
      font-family: 'Charmonman';
      font-size: 4rem;
    }
  }
`
