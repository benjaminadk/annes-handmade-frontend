import styled from 'styled-components'
import { lighten } from 'polished'

export const ToastStyles = styled.div`
  position: fixed;
  bottom: ${props => (props.show ? '3rem' : '-100vh')};
  left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => lighten(0.175, props.theme.secondary)};
  border: 1px solid ${props => props.theme.grey[2]};
  border-left: 5px solid ${props => props.theme.secondary};
  padding: 1rem 2rem;
  transition: 0.5s;
  box-shadow: ${props => props.theme.shadows[1]};
  & > :first-child {
    margin-right: 1rem;
  }
  & > :last-child {
    margin-left: 1rem;
    cursor: pointer;
  }
`
