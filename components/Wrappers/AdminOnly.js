import { Query } from 'react-apollo'
import Register from '../Register'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'

export default function AdminOnly(props) {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data }) => {
        if (!data.me) {
          return <Register />
        }
        if (data.me.role !== 'ADMIN') {
          return <Register />
        }
        return props.children
      }}
    </Query>
  )
}
