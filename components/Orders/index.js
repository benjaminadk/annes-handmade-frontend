import { Query } from 'react-apollo'
import Link from 'next/link'
import { formatDistance } from 'date-fns'
import formatMoney from '../../lib/formatMoney'
import Loading from '../Loading'
import { OrderStyle, OrderTitle, OrderGrid, OrderItem } from './styles/Orders'
import { USER_ORDERS_QUERY } from '../../apollo/query/orders'

export default function Orders() {
  return (
    <Query query={USER_ORDERS_QUERY}>
      {({ data, loading }) => {
        if (loading) return <Loading size={10} message="Loading Order History" />
        const orders = data.orders
        return (
          <OrderStyle>
            <OrderTitle>Order History</OrderTitle>
            <OrderGrid>
              {orders.map(order => (
                <OrderItem key={order.id}>
                  <Link
                    href={{
                      pathname: '/order',
                      query: { id: order.id }
                    }}
                  >
                    <a>
                      <div className="data">
                        <p>{order.items.length} Items</p>
                        <p>{formatDistance(order.createdAt, new Date())}</p>
                        <p>{formatMoney(order.total)}</p>
                      </div>
                      <div className="images">
                        {order.items.map((el, i) => {
                          if (i < 3) {
                            return el.images.map(image => <img key={image} src={image} />)
                          }
                        })}
                      </div>
                    </a>
                  </Link>
                </OrderItem>
              ))}
            </OrderGrid>
          </OrderStyle>
        )
      }}
    </Query>
  )
}
