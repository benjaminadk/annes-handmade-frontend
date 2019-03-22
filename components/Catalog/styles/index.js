import styled from 'styled-components'
import media from '../../styles/media'

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  & > :first-child {
    width: 40rem;
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
    border-left: 10px solid ${props => props.theme.secondary};
    background: ${props => props.theme.black};
    color: white;
    ${media.phone`
      width: 100%;
    `}
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 100px;
  align-items: center;
  justify-items: center;
  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`

export const Tile = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  align-items: center;
  justify-items: center;
  padding: 10px 0;
  cursor: pointer;
  overflow: hidden;
  transition: all 300ms ease-out;
  &:hover {
    transform: scale(1.15);
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.5);
  }
  &:hover .overlay {
    transform: scale(1.2) translateY(0);
  }
  .display {
    display: grid;
    place-items: center center;
    width: 100%;
    height: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    img {
      width: 75px;
      ${media.phone`
        width: 150px;
      `}
    }
    .label {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 10px 0;
    font-family: 'Charmonman';
    font-size: 2rem;
    transition: all 300ms ease-out;
    transform: translateY(110%);
  }
`
