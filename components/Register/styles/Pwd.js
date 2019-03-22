import styled from 'styled-components'

export const Pwd = styled.span`
  display: grid;
  grid-template-columns: auto repeat(5, 1fr);
  grid-gap: 5px;
  font-size: 1.1rem;
  color: ${props => props.theme.black};
`

export const Bar = styled.span.attrs(props => ({
  style: {
    opacity: props.pwd > props.threshold ? 1 : 0
  }
}))`
  display: block;
  align-self: center;
  height: 0.5rem;
  transition: all 0.5s ease-in;
  background: ${props => props.color || props.theme.primary};
  box-shadow: ${props => props.theme.shadows[1]};
`
