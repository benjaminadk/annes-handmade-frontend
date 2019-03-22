import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import PropTypes from 'prop-types'

export default function User(props) {
  return (
    <Query {...props} query={CURRENT_USER_QUERY}>
      {payload => props.children(payload)}
    </Query>
  )
}

User.propTypes = {
  children: PropTypes.func.isRequired
}
