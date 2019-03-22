import styled from 'styled-components'

export const ThumbnailsStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 10rem);
  grid-gap: 2rem;
`

export const Thumbnail = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border: 1px solid ${props => props.theme.grey[2]};
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  outline: 3px solid ${props => (props.selected ? props.theme.secondary : 'transparent')};
`
