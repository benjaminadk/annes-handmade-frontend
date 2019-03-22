import styled from 'styled-components'
import { GreenButton } from '../../styles/GreenButton'

export const CreateProductStyles = styled.form`
  width: 45rem;
  justify-self: center;
  border: 1px solid ${props => props.theme.grey[2]};
  padding: 2rem;
  margin-bottom: 3rem;
  background: ${props => props.theme.grey[0]};
  fieldset {
    border: none;
    padding: 0;
  }
`

export const CreateButton = styled(GreenButton)`
  margin-top: 2rem;
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
`
