import { Container } from './styles/Profile'
import ProfileUser from './ProfileUser'
import ProfileOrders from './ProfileOrders'
import ProfileAdmin from './ProfileAdmin'
import Signout from './Signout'
import Head from '../Head'

export default function Profile({ user }) {
  return (
    <Container>
      <Head title={user.name} />
      <ProfileUser user={user} />
      <ProfileOrders user={user} />
      {user.role === 'ADMIN' && <ProfileAdmin />}
      <Signout />
    </Container>
  )
}
