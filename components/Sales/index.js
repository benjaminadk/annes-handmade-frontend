import React from 'react'
import { Query, Mutation } from 'react-apollo'
import ReactTable from 'react-table'
import { format } from 'date-fns'
import formatMoney from '../../lib/formatMoney'
import formatText from '../../lib/formatText'
import { Header, Center } from './styles/Sales'
import { Column } from '../Inventory/styles/Table'
import AdminNav from '../CreateProduct/AdminNav'
import Loading from '../Loading'
import { SALES_QUERY } from '../../apollo/query/sales'
import { SHIPPED_MUTATION } from '../../apollo/mutation/toggleShipped'

export default class Sales extends React.Component {
  state = {
    showItems: false
  }

  handleExpander = (showItems, isExpanded) => {
    if (isExpanded) return
    this.setState({ showItems })
  }

  render() {
    const columns = [
      {
        Header: () => <Header>Shipped</Header>,
        accessor: 'shipped',
        width: 80,
        Cell: props => (
          <Mutation
            mutation={SHIPPED_MUTATION}
            variables={{ id: props.original.id, shipped: props.original.shipped }}
            refetchQueries={[{ query: SALES_QUERY }]}
            awaitRefetchQueries={true}
          >
            {(toggleShipped, { loading }) => (
              <Center title="Toggle shipped status">
                <button onClick={toggleShipped} disabled={loading}>
                  {loading ? '💬' : props.value ? '👍' : '🚫'}
                </button>
              </Center>
            )}
          </Mutation>
        )
      },
      {
        Header: () => <Header>Date</Header>,
        accessor: 'createdAt',
        minWidth: 100,
        Cell: props => <Center>{format(props.value, 'MM/DD/YYYY')}</Center>
      },
      {
        Header: () => <Header>IDs</Header>,
        accessor: 'id',
        Cell: props => (
          <Center>
            <div className="ids">
              <span>Order ID: {props.value}</span>
              <a
                title="Open Stripe Dashboard"
                href={`https://dashboard.stripe.com/payments/${props.original.charge}`}
                target="blank"
              >
                Stripe ID: {props.original.charge}
              </a>
            </div>
          </Center>
        )
      },
      {
        Header: () => <Header>Count</Header>,
        accessor: 'items',
        width: 80,
        Cell: props => <Center>{props.value.length}</Center>
      },
      {
        Header: () => <Header>Items</Header>,
        accessor: 'items',
        width: 100,
        expander: true,
        Expander: ({ isExpanded, ...rest }) => (
          <Center onMouseEnter={() => this.handleExpander(true, isExpanded)}>
            <button>{isExpanded && this.state.showItems ? '✖' : '💎'}</button>
          </Center>
        )
      },
      {
        Header: () => <Header>Customer</Header>,
        accessor: 'shipping',
        width: 100,
        expander: true,
        Expander: ({ isExpanded, ...rest }) => (
          <Center onMouseEnter={() => this.handleExpander(false, isExpanded)}>
            <button>{isExpanded && !this.state.showItems ? '✖' : '👨👩'}</button>
          </Center>
        )
      },
      {
        Header: () => <Header>Total</Header>,
        accessor: 'total',
        Cell: props => (
          <Center>
            <strong>{formatMoney(props.value)}</strong>
          </Center>
        ),
        Footer: props => {
          const total = props.data.reduce((acc, el) => acc + el.total, 0)
          return (
            <Center>
              <strong>{formatMoney(total)}</strong>
            </Center>
          )
        }
      }
    ]
    return (
      <Query query={SALES_QUERY}>
        {({ data, loading }) => {
          if (loading) return <Loading size={10} message="Loading Sales Data" />
          return (
            <Column>
              <AdminNav />
              <ReactTable
                data={data.sales}
                columns={columns}
                showPaginationTop
                defaultPageSize={10}
                defaultSorted={[{ id: 'createdAt', desc: true }]}
                className="-striped -highlight"
                previousText={`🠜 Previous`}
                nextText={`Next 🠞`}
                rowsText={`sales`}
                SubComponent={row => {
                  if (this.state.showItems) {
                    const itemColumns = [
                      {
                        Header: () => <Header>Images</Header>,
                        accessor: 'images',
                        Cell: props => (
                          <Center>
                            {props.value.map(image => (
                              <img key={image} src={image} width="50" />
                            ))}
                          </Center>
                        )
                      },
                      {
                        Header: () => <Header>Title</Header>,
                        accessor: 'title',
                        Cell: props => <Center>{props.value}</Center>
                      },
                      {
                        Header: () => <Header>Type</Header>,
                        accessor: 'variant',
                        Cell: props => <Center>{formatText(props.value)}</Center>
                      },
                      {
                        Header: () => <Header>Bead</Header>,
                        accessor: 'bead',
                        Cell: props => <Center>{formatText(props.value)}</Center>
                      },
                      {
                        Header: () => <Header>Price</Header>,
                        accessor: 'price',
                        Cell: props => <Center>{formatMoney(props.value)}</Center>
                      }
                    ]
                    return (
                      <ReactTable
                        data={row.original.items}
                        columns={itemColumns}
                        defaultPageSize={row.original.items.length}
                        showPagination={false}
                      />
                    )
                  } else {
                    const customerColumns = [
                      {
                        Header: () => <Header>Image</Header>,
                        accessor: 'image',
                        width: 80,
                        Cell: props => (
                          <Center>
                            {props.value ? <img src={props.value} width="50" /> : '😀'}
                          </Center>
                        )
                      },
                      {
                        Header: () => <Header>Email</Header>,
                        accessor: 'email',
                        Cell: props => (
                          <Center title="Send email to user">
                            <a
                              href={`mailto:${
                                props.value
                              }?subject=Anne's Handmade Customer Service`}
                              target="_blank"
                            >
                              {props.value}
                            </a>
                          </Center>
                        )
                      },
                      {
                        Header: () => <Header>Name</Header>,
                        accessor: 'name',
                        minWidth: 100,
                        maxWidth: 200,
                        Cell: props => <Center>{props.value}</Center>
                      },
                      {
                        Header: () => <Header>Street</Header>,
                        accessor: 'street',
                        Cell: props => <Center>{props.value}</Center>
                      },
                      {
                        Header: () => <Header>City</Header>,
                        accessor: 'city',
                        minWidth: 75,
                        maxWidth: 150,
                        Cell: props => <Center>{props.value}</Center>
                      },
                      {
                        Header: () => <Header>State</Header>,
                        accessor: 'state',
                        width: 60,
                        Cell: props => <Center>{props.value}</Center>
                      },
                      {
                        Header: () => <Header>Zip</Header>,
                        accessor: 'zip',
                        width: 60,
                        Cell: props => <Center>{props.value}</Center>
                      }
                    ]
                    return (
                      <ReactTable
                        data={[{ ...row.original.user, ...row.original.shipping }]}
                        columns={customerColumns}
                        defaultPageSize={1}
                        showPagination={false}
                      />
                    )
                  }
                }}
              />
            </Column>
          )
        }}
      </Query>
    )
  }
}
