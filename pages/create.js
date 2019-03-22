import AdminOnly from '../components/Wrappers/AdminOnly'
import CreateProduct from '../components/CreateProduct'

export default props => (
  <AdminOnly>
    <CreateProduct {...props} />
  </AdminOnly>
)
