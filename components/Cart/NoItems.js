import { NoItemsStyles } from './styles/NoItems'

export default function NoItems() {
  return (
    <NoItemsStyles>
      <div className="content">
        <div className="logo" />
        <div className="message">Empty Cart</div>
      </div>
    </NoItemsStyles>
  )
}
