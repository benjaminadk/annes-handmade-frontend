import AdminOnly from '../components/Wrappers/AdminOnly'
import Inventory from '../components/Inventory'

export default props => (
  <AdminOnly>
    <Inventory {...props} />
  </AdminOnly>
)
