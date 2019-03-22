import AdminOnly from '../components/Wrappers/AdminOnly'
import Sales from '../components/Sales'

export default props => (
  <AdminOnly>
    <Sales {...props} />
  </AdminOnly>
)
