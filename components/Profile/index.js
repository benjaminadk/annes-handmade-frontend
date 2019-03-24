import { Container } from './styles/Profile'
import ProfileUser from './ProfileUser'
import ProfileOrders from './ProfileOrders'
import ProfileAdmin from './ProfileAdmin'
import Signout from './Signout'

export default function Profile({ user }) {
  return (
    <Container>
      <ProfileUser user={user} />
      <ProfileOrders user={user} />
      {user.role === 'ADMIN' && <ProfileAdmin />}
      <Signout />
    </Container>
  )
}
