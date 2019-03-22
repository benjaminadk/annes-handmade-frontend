import styled from 'styled-components'
import { darken } from 'polished'
import { GreenButton } from '../../styles/GreenButton'
import media from '../../styles/media'

export const Form = styled.form`
  align-self: center;
  max-width: 37.5rem;
  border: 1px solid ${props => props.theme.grey[2]};
  box-shadow: ${props => props.theme.shadows[1]};
  .header {
    background: ${props => props.theme.black};
    color: white;
    border-left: 10px solid ${props => props.theme.secondary};
    font-size: 2.75rem;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  fieldset {
    background: ${props => props.theme.grey[0]};
    border: none;
    padding: 0rem 1rem 2rem 1rem;
    .switches {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .divider {
      margin: 1rem 0.5rem 0;
    }
    .switch {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      text-align: center;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: ${props => darken(0.2, props.theme.primary)};
      }
    }
  }
  .actions {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    align-items: center;
  }
`

export const FormButton = styled(GreenButton)`
  width: 100%;
  font-size: 1.75rem;
  padding: 1rem;
  ${media.phone`
    font-size: 1.25rem;
  `}
`
