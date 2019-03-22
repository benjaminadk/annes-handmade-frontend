import styled from 'styled-components'
import media from '../../styles/media'

export const OrderStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: grid;
  justify-items: center;
  margin: 3rem auto;
  .content {
    width: 75%;
    border: 1px solid ${props => props.theme.grey[2]};
    padding: 2rem;
    border-top: 10px solid ${props => props.theme.secondary};
    background: ${props => props.theme.grey[0]};
    ${media.phone`
      width: 95%;
      font-size: 1.25rem;
    `}
  }
`

export const Stat = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.grey[2]};
  ${media.phone`
    grid-template-columns: 1fr 2fr;
  `}
  span {
    padding: 1rem;
    ${media.phone`
      font-size: 1rem;
    `}
    &:first-child {
      text-align: right;
    }
  }
`

export const Item = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  align-items: center;
  grid-gap: 2rem;
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.grey[0]};
  img {
    width: 100%;
    object-fit: cover;
    border: 1px solid ${props => props.theme.grey[2]};
  }
  ${media.phone`
    grid-template-columns: 1fr;
  `}
`
