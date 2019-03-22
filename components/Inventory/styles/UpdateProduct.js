import styled from 'styled-components'
import { GreenButton } from '../../styles/GreenButton'

export const UpdateProductStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 0.75fr;
  grid-gap: 20px;
  padding: 4rem 0 4rem 1rem;
  background: ${props => props.theme.grey[0]};
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

export const UpdateButton = styled(GreenButton)`
  grid-column: 2 / 2;
  font-size: 2rem;
  padding: 1rem 2rem;
`
