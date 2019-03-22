import styled from 'styled-components'

export const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 1s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: rotateY(0.5turn) scale(1);
    background: ${props => props.theme.secondary};
  }
  .count-enter-active {
    transform: rotateY(0) scale(2);
    background: ${props => props.theme.secondary};
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateY(0) scale(1);
    background: ${props => props.theme.secondary};
  }
  .count-exit-active {
    transform: rotateY(0.5turn) scale(2);
    background: ${props => props.theme.secondary};
  }
`

export const Dot = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  padding: 1rem 0 1rem 1.5rem;
  line-height: 2rem;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  background: ${props => props.theme.black};
  color: white;
`
