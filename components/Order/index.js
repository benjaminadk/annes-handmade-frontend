import { Query } from 'react-apollo'
import { format } from 'date-fns'
import Head from 'next/head'
import formatMoney from '../../lib/formatMoney'
import { SINGLE_ORDER_QUERY } from '../../apollo/query/order'
import Loading from '../Loading'
import { OrderStyles, Stat, Item } from './styles/Order'

export default function Order({ query: { id } }) {
  return (
    <Query query={SINGLE_ORDER_QUERY} variables={{ id }}>
      {({ data, loading }) => {
        if (loading) return <Loading size={10} message="Loading Order Summary" />
        const order = data.order
        return (
          <>
            <Head>
              <title>Anne's Handmade | Order ID: ${id}</title>
            </Head>
            <OrderStyles data-test="order">
              <div className="content">
                <Stat>
                  <span>Order ID</span>
                  <span>{id}</span>
                </Stat>
                <Stat>
                  <span>Charge ID</span>
                  <span>{order.charge}</span>
                </Stat>
                <Stat>
                  <span>Date</span>
                  <span>{format(order.createdAt, 'MMMM d, YYYY h:mm a')}</span>
                </Stat>
                <Stat>
                  <span>Order Total</span>
                  <span>{formatMoney(order.total)}</span>
                </Stat>
                <Stat>
                  <span>Item Count</span>
                  <span>{order.items.length}</span>
                </Stat>
                <div>
                  {order.items.map(item => (
                    <Item key={item.id}>
                      <img src={item.images[0]} alt={item.title} />
                      <div className="item-details">
                        <h2>{item.title}</h2>
                        <p>Price: {formatMoney(item.price)}</p>
                        <p>{item.description}</p>
                      </div>
                    </Item>
                  ))}
                </div>
              </div>
            </OrderStyles>
          </>
        )
      }}
    </Query>
  )
}
