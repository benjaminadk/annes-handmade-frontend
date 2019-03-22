import styled from 'styled-components'
import media from '../../styles/media'
import { lighten } from 'polished'

export const PaginationStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  border: 1px solid ${props => props.theme.grey[2]};
  border-left: 10px solid ${props => props.theme.secondary};
  text-align: center;
  background: ${props => props.theme.grey[0]};
  margin: 3rem auto;
  & > * {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 1.5rem 3rem;
    border-right: 1px solid ${props => props.theme.grey[2]};
    ${media.phone`
      padding: .5rem .5rem; 
      align-self: center; 
      font-size: 1.1rem;
    `}
    &:nth-child(odd):hover {
      background: ${props => lighten(0.2, props.theme.secondary)};
    }
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`
