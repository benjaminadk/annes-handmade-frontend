import { ArrowForward as Close } from 'styled-icons/material/ArrowForward'
import { CloseButton } from './styles/CloseButton'
import { CartHeaderStyles } from './styles/CartHeader'

export default function CartHeader({ title, toggleCart }) {
  return (
    <CartHeaderStyles>
      <CloseButton onClick={toggleCart}>
        <Close size={25} />
      </CloseButton>
      <div className="title">{title}</div>
    </CartHeaderStyles>
  )
}
