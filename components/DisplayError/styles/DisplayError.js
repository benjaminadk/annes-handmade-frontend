import styled from 'styled-components'

export const ErrorStyles = styled.div`
  padding: 1rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 10px solid red;
  box-shadow: ${props => props.theme.shadows[1]};
  p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${props => props.theme.black};
  }
`
