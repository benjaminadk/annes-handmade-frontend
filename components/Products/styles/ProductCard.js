import styled from 'styled-components'
import media from '../../styles/media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Image = styled.img`
  width: 20rem;
  object-fit: cover;
  border: 1px solid ${props => props.theme.grey[2]};
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows[1]};
  ${media.phone`
      width: 30rem;
  `}
`

export const Actions = styled.div`
  width: 20rem;
  position: absolute;
  top: -4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  ${media.phone`
      width: 30rem;
  `}
`

export const Title = styled.h4`
  max-width: 20rem;
  position: absolute;
  bottom: -4.2rem;
  align-self: center;
  text-align: center;
  font-weight: 600;
  background: ${props => props.theme.black};
  color: white;
  border-left: 5px solid ${props => props.theme.secondary};
  padding: 0 10px;
  box-shadow: ${props => props.theme.shadows[1]};
  cursor: pointer;
`

export const Price = styled.span`
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0;
  background: ${props => props.theme.black};
  color: white;
  padding: 5px;
  padding-bottom: 0.8rem;
  border-left: 2.5px solid ${props => props.theme.secondary};
  line-height: 1;
`

export const Action = styled.button`
  background: white;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  cursor: pointer;
`

export const Error = styled.div`
  position: absolute;
  top: 3rem;
  left: 1.5rem;
`
