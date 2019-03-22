import styled from 'styled-components'
import media from '../../styles/media'

export const Container = styled.div`
  padding: 2rem;
`

export const Top = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: ${props => props.theme.shadows[0]};
  color: white;
  background: ${props => props.theme.black};
  border-left: 20px solid ${props => props.theme.secondary};
  ${media.phone`
    border-left: 10px solid ${props => props.theme.secondary};
  `}
`

export const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  ${media.phone`
      grid-template-columns: 1fr; 
      grid-template-rows: auto auto auto;
    `}
  .item {
    display: grid;
    align-items: center;
    cursor: pointer;
    img {
      width: 250px;
      border: 1px solid ${props => props.theme.grey[2]};
    }
    &:first-child img {
      transform: rotate(-3deg);
      ${media.phone`
        transform: rotate(0);
      `}
    }
    &:last-child img {
      transform: rotate(3deg);
      ${media.phone`
        transform: rotate(0);
      `}
    }
    ${media.phone`
        margin-bottom: 2rem;
    `}
  }
`

export const Headline = styled.p`
  font-family: 'Charmonman';
  font-size: 8rem;
  margin: 0;
  padding: 0;
  ${media.phone`
    font-size: 3rem;
  `}
`

export const SubHeadline = styled.p`
  font-family: 'Charmonman';
  font-size: 2.5rem;
  margin: 0;
  margin-top: -5rem;
  padding: 0;
  padding-bottom: 2rem;
  ${media.phone`
    font-size: 1.5rem; 
    margin-top: 0;
  `}
`

export const Action = styled.div`
  text-align: center;
  font-family: 'Charmonman';
  font-size: 3rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  color: white;
  background: ${props => props.theme.black};
  border-left: 10px solid ${props => props.theme.secondary};
  ${media.phone`
    margin-top: 1rem;
  `}
`
