import styled from 'styled-components'
import media from '../../styles/media'

export const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 50px;
  margin-top: 5rem;
  padding: 2rem;
  ${media.tablet`
    grid-template-columns: auto; 
    grid-template-rows: auto auto; 
    grid-gap: 10px;
    justify-items: center;
    margin-top: 1rem;
  `}
`
