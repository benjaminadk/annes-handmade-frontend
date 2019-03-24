import { Query } from 'react-apollo'
import { ALL_PRODUCTS_QUERY } from '../../apollo/query/products'
import { perPage } from '../../config'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import Loading from '../Loading'
import { Center, Container } from './styles/Products'

export default function Products({ query, user }) {
  const page = Number(query.page) || 1
  const skip = page * perPage - perPage
  const where = {
    variant: query.variant,
    bead: query.bead,
    sold: false
  }
  return (
    <Center>
      <Pagination where={where} page={page} />
      <Query query={ALL_PRODUCTS_QUERY} variables={{ where, skip }}>
        {({ data, loading }) => {
          if (loading) {
            return <Loading size={10} message="Loading Products" />
          }
          return (
            <Container>
              {data.products.map(el => (
                <ProductCard key={el.id} product={el} user={user} />
              ))}
            </Container>
          )
        }}
      </Query>
      <Pagination where={where} page={page} />
    </Center>
  )
}
