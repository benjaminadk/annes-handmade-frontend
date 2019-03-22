import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AnimationStyles, Dot } from './styles/CartCount'

export default function CartCount({ count }) {
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 750, exit: 750 }}
        >
          <Dot>{count}</Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  )
}
