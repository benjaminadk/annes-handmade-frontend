import styled from 'styled-components'
import media from '../../styles/media'

export const ProductDetailStyles = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 75px 75px;
  .properties {
    display: flex;
    align-items: center;
  }
`

export const Title = styled.div`
  display: block;
  background: ${props => props.theme.black};
  color: white;
  border-left: 15px solid ${props => props.theme.secondary};
  font-size: 5rem;
  text-align: center;
  ${media.desktop`
    font-size: 4rem;
  `}
  ${media.phone`
    font-size: 3rem;  
    padding: 2rem 0 0;
  `}
`

export const Description = styled.p`
  width: 75%;
  text-align: justify;
  font-size: 1.75rem;
  margin-left: 3rem;
  padding: 0 1rem;
  ${media.phone`
    width: 90%;
  `}
`

export const Price = styled.div`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-right: 1rem;
  border: 1px solid ${props => props.theme.grey[2]};
  box-shadow: ${props => props.theme.shadows[1]};
`
