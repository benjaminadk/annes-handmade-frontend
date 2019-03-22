import styled from 'styled-components'

export const TypeThumb = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 2px;
  margin-right: 1rem;
  border: 1px solid ${props => props.theme.grey[2]};
  box-shadow: ${props => props.theme.shadows[1]};
`
