import React from 'react'
import { Query, Mutation } from 'react-apollo'
import LightBox from 'react-images'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'
import formatMoney from '../../lib/formatMoney'
import formatText from '../../lib/formatText'
import UpdateProduct from './UpdateProduct'
import { Column, Sold, Header, EditButton, Price, Images, Button, Total } from './styles/Table'
import BeadOptions from './BeadOptions'
import AdminNav from '../CreateProduct/AdminNav'
import Loading from '../Loading'
import Toast from '../Toast'
import Head from '../Head'
import { DELETE_PRODUCT_MUTATION } from '../../apollo/mutation/deleteProduct'
import { INVENTORY_QUERY } from '../../apollo/query/inventory'

export default class Inventory extends React.Component {
  state = {
    isOpen: false,
    images: [],
    imageIndex: 0,
    showToast: false,
    messageToast: ''
  }

  handleDeleteProduct = async (deleteProduct, title) => {
    if (confirm(`Permanently delete "${title}" ?`)) {
      await deleteProduct()
      this.setState(
        {
          showToast: true,
          messageToast: `"${title}" deleted successfully!`
        },
        () => this.setState({ showToast: false })
      )
    }
  }

  handleLightBoxOpen = (imgs, caption) => {
    const images = imgs.map(img => ({ src: img, caption }))
    this.setState({ images, isOpen: true })
  }

  handleLightBoxClose = () => this.setState({ isOpen: false, images: [] })

  handlePrev = () => this.setState(({ imageIndex }) => ({ imageIndex: imageIndex - 1 }))

  handleNext = () => this.setState(({ imageIndex }) => ({ imageIndex: imageIndex + 1 }))

  render() {
    const { isOpen, imageIndex, images, showToast, messageToast } = this.state

    const columns = [
      {
        Header: () => <Header>Sold</Header>,
        Footer: props => {
          const total = props.data.reduce((acc, product) => acc + (product.sold ? 1 : 0), 0)
          return <Total>{total}</Total>
        },
        accessor: 'sold',
        filterable: false,
        width: 60,
        Cell: props => <Sold>{props.value ? '✅' : '➖'}</Sold>
      },
      {
        Header: () => <Header>Title</Header>,
        accessor: 'title',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['title'] }),
        filterAll: true,
        Cell: props => <p>{props.value}</p>
      },
      {
        Header: () => <Header>Type</Header>,
        accessor: 'variant',
        filterMethod: (filter, row) => {
          if (filter.value === 'ALL') return true
          return row[filter.id] === filter.value
        },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            value={filter ? filter.value : 'ALL'}
          >
            <option value="ALL">Show All</option>
            <option value="NECKLACE">Necklace</option>
            <option value="BRACELET">Bracelet</option>
            <option value="EARRINGS">Earrings</option>
          </select>
        ),
        Cell: props => <p>{formatText(props.value)}</p>
      },
      {
        Header: () => <Header>Bead</Header>,
        accessor: 'bead',
        filterMethod: (filter, row) => {
          if (filter.value === 'ALL') return true
          return row[filter.id] === filter.value
        },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            value={filter ? filter.value : 'ALL'}
          >
            <BeadOptions />
          </select>
        ),
        Cell: props => <p>{formatText(props.value)}</p>
      },
      {
        Header: () => <Header>Images</Header>,
        accessor: 'images',
        filterable: false,
        Cell: props => (
          <Images>
            {props.value.map((img, i, array) => (
              <img
                key={i}
                src={img}
                width="50"
                onClick={() => this.handleLightBoxOpen(array, props.original.title)}
                title="Click to Enlarge"
              />
            ))}
          </Images>
        )
      },
      {
        Header: () => <Header>Price</Header>,
        Footer: props => {
          const total = props.data.reduce((acc, product) => acc + product.price, 0)
          return <Total>{formatMoney(total)}</Total>
        },
        accessor: 'price',
        filterable: false,
        width: 80,
        Cell: props => <Price>{formatMoney(props.value)}</Price>
      },
      {
        Header: () => <Header>Edit</Header>,
        accessor: 'id',
        filterable: false,
        width: 80,
        expander: true,
        Expander: ({ isExpanded, ...rest }) => (
          <EditButton {...rest}>
            <div>{isExpanded ? '✖' : '📝'}</div>
          </EditButton>
        )
      },
      {
        Header: () => <Header>Delete</Header>,
        accessor: 'id',
        filterable: false,
        width: 80,
        Cell: props => (
          <Mutation
            mutation={DELETE_PRODUCT_MUTATION}
            variables={{ id: props.value }}
            refetchQueries={[{ query: INVENTORY_QUERY }]}
          >
            {(deleteProduct, { loading }) => (
              <Button
                disabled={loading}
                onClick={() => this.handleDeleteProduct(deleteProduct, props.original.title)}
              >
                {loading ? '💬' : '❌'}
              </Button>
            )}
          </Mutation>
        )
      }
    ]

    return (
      <>
        <Head title="Admin" />
        <Query query={INVENTORY_QUERY}>
          {({ data, loading }) => {
            if (loading) return <Loading size={10} message="Loading Inventory Table" />
            return (
              <Column>
                <AdminNav />
                <ReactTable
                  data={data.products}
                  className="-striped -highlight"
                  collapseOnDataChange={false}
                  columns={columns}
                  defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
                  defaultPageSize={10}
                  defaultSorted={[{ id: 'title', asc: true }]}
                  filterable={true}
                  nextText={`Next 🠞`}
                  previousText={`🠜 Previous`}
                  rowsText={`products`}
                  showPaginationTop={true}
                  SubComponent={row => <UpdateProduct product={row.original} index={row.index} />}
                />
                <Toast show={showToast} message={messageToast} delay={8000} />
              </Column>
            )
          }}
        </Query>
        <LightBox
          isOpen={isOpen}
          images={images}
          currentImage={imageIndex}
          backdropClosesModal
          onClose={this.handleLightBoxClose}
          onClickPrev={this.handlePrev}
          onClickNext={this.handleNext}
        />
      </>
    )
  }
}
