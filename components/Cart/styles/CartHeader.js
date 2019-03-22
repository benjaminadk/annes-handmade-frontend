import styled from 'styled-components'

export const CartHeaderStyles = styled.header`
  background: ${props => props.theme.black};
  border-left: 10px solid ${props => props.theme.secondary};
  padding: 1rem;
  .title {
    font-size: 3.5rem;
    color: white;
    text-align: center;
  }
`
