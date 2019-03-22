import { Query } from 'react-apollo'
import Register from '../Register'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'

export default function PleaseSignUp(props) {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return null
        if (!data || !data.me) return <Register />
        return props.children
      }}
    </Query>
  )
}
