import styled from 'styled-components'

export const HintStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  .container {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: ${props => props.theme.black};
    color: white;
    border-left: 5px solid ${props => props.theme.secondary};
    opacity: 0.75;
    box-shadow: ${props => props.theme.shadows[10]};
    .text {
      font-size: 2rem;
    }
  }
`
