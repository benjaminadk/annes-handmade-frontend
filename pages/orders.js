import Orders from '../components/Orders'
import PleaseSignUp from '../components/Wrappers/PleaseSignUp'

export default props => (
  <PleaseSignUp>
    <Orders {...props} />
  </PleaseSignUp>
)
