import Link from 'next/link'
import { withRouter } from 'next/router'
import { AdminNavStyles } from './styles/AdminNav'

const routes = {
  ['/create']: 1,
  ['/inventory']: 2,
  ['/sales']: 3
}

function AdminNav(props) {
  const route = props.router.route
  const highlightIndex = routes[route]
  return (
    <AdminNavStyles highlightIndex={highlightIndex}>
      <Link href="/create" prefetch>
        <a>Add Product</a>
      </Link>
      <Link href="/inventory" prefetch>
        <a>Inventory</a>
      </Link>
      <Link href="/sales" prefetch>
        <a>Sales</a>
      </Link>
    </AdminNavStyles>
  )
}

export default withRouter(AdminNav)
