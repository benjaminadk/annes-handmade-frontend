import { withRouter } from 'next/router'
import {
  ProfileStyles,
  Title,
  Description,
  Content,
  Stat,
  Thumbnails,
  ProfileButton
} from './styles/Profile'
import formatMoney from '../../lib/formatMoney'

function stats(orders) {
  const count = orders.length
  const items = orders.reduce((acc, val) => (acc += val.items.length), 0)
  const total = orders.reduce((acc, val) => (acc += val.total), 0)
  const images = orders.reduce((acc, val) => {
    val.items.forEach(a => {
      acc.push(a.images[0])
    })
    return acc
  }, [])
  return [count, items, total, images]
}

function ProfileOrders({ user: { orders }, router }) {
  const [ordersCount, itemsCount, grandTotal, thumbnails] = stats(orders)

  const onClick = e => {
    e.preventDefault()
    router.push('/orders')
  }

  return (
    <ProfileStyles>
      <div>
        <Title>Orders</Title>
        <Description>Complete history of orders you have placed.</Description>
      </div>
      <Content>
        <Stat>
          <span>Orders Made</span>
          <span>{ordersCount}</span>
        </Stat>
        <Stat>
          <span>Items Purchased</span>
          <span>{itemsCount}</span>
        </Stat>
        <Stat digits={grandTotal.length}>
          <span>Money Spent</span>
          <span>{formatMoney(grandTotal)}</span>
        </Stat>
        <Thumbnails>
          {thumbnails.map((el, i) => (
            <img key={i} src={el} width="30" />
          ))}
        </Thumbnails>
        <ProfileButton onClick={onClick}>View Orders</ProfileButton>
      </Content>
    </ProfileStyles>
  )
}

export default withRouter(ProfileOrders)
