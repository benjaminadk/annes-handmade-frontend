import { Spinner10 as Spinner } from 'styled-icons/icomoon/Spinner10'
import { LoadingStyles } from './styles/Loading'

export default function Loading({ size, message }) {
  return (
    <LoadingStyles size={size}>
      <Spinner />
      <div className="message">{message}</div>
    </LoadingStyles>
  )
}
