import styled from 'styled-components'

export const CartItemStyles = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 1fr auto;
  background: white;
  padding: 1rem 0;
  margin: 1rem auto;
  box-shadow: ${props => props.theme.shadows[1]};
  img {
    justify-self: center;
    width: 7.5rem;
    border: 1px solid ${props => props.theme.grey[2]};
  }
  h3,
  p {
    margin: 0;
  }
`
