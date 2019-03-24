import styled from 'styled-components'
import { lighten } from 'polished'
import media from '../../styles/media'

export const Title = styled.h4`
  align-self: center;
  max-width: 18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: -4rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  background: ${props => props.theme.black};
  color: white;
  border-left: 5px solid ${props => props.theme.secondary};
  padding: 0 10px;
  box-shadow: ${props => props.theme.shadows[1]};
  transition: all 0.2s;
  cursor: pointer;
  ${media.phone`
    max-width: 26rem;
    bottom: -6rem;
    font-size: 2.5rem;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 5rem;
  &:hover ${Title} {
    max-width: 26rem;
    bottom: -5rem;
    font-size: 2rem;
    transform: skew(-5deg);
  }
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

export const Action = styled.button`
  background: white;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background: ${props => lighten(0.2, props.theme.secondary)};
  }
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
  border-left: 5px solid ${props => props.theme.secondary};
  line-height: 1;
  font-size: 2rem;
  ${media.phone`
    font-size: 3rem;
  `}
`

export const Error = styled.div`
  position: absolute;
  top: 3rem;
  left: 1.5rem;
`
