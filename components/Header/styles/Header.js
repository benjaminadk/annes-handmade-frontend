import styled from 'styled-components'
import media from '../../styles/media'

export const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 2fr 3fr 1fr 1fr;
    align-items: center;
    position: fixed;
    z-index: 2;
    width: 100%;
    background: ${props => props.theme.primary};
    ${media.phone`
      grid-template-columns: auto 2fr 1fr 1fr;
    `}
  }
  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    font-size: 2rem;
    ${media.phone`
      grid-template-columns: auto; 
      font-size: 3rem;
    `}
    .about {
      ${media.phone`
        display: none;
      `}
    }
  }
`

export const Logo = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-left: 3rem;
  cursor: pointer;
  ${media.phone`
    margin-left: 1rem;
  `}
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`
