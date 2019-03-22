import styled from 'styled-components'
import { lighten } from 'polished'
import media from '../../styles/media'

export const AdminNavStyles = styled.div`
  justify-self: center;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${props => props.theme.grey[2]};
  border-left: 5px solid ${props => props.theme.secondary};
  margin: 3rem auto;
  background: ${props => props.theme.grey[0]};
  ${media.tablet`
    width: 35rem;
    justify-self: flex-start !important;
  `}
  & > * {
    text-align: center;
    padding: 1.5rem 3rem;
    border-right: 1px solid ${props => props.theme.grey[2]};
    ${media.tablet`
      padding: .5rem 1rem;
    `}
    &:hover {
      background: ${props => lighten(0.2, props.theme.secondary)};
    }
    &:nth-child(${props => props.highlightIndex}) {
      background: ${props => lighten(0.2, props.theme.secondary)};
    }
  }
  &:last-child {
    border-right: 0;
  }
`
