import styled from 'styled-components'

export const CartFooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  border-top: 10px double ${props => props.theme.black};
  background: white;
  padding: 1rem;
  .totals {
    opacity: ${props => (props.cart ? 1 : 0)};
    & > :last-child {
      font-size: 3rem;
    }
  }
`
