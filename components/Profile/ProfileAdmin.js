import { withRouter } from 'next/router'
import { ProfileStyles, Title, Description, Content, ProfileButton } from './styles/Profile'

function ProfileAdmin({ router }) {
  const onClick = (e, pathname) => {
    e.preventDefault()
    router.push(pathname)
  }

  return (
    <ProfileStyles>
      <div>
        <Title>Admin Dashboard</Title>
        <Description>Create, edit and delete site content.</Description>
      </div>
      <Content>
        <ProfileButton onClick={e => onClick(e, '/create')}>Add Product</ProfileButton>
        <ProfileButton onClick={e => onClick(e, '/inventory')}>Inventory</ProfileButton>
        <ProfileButton onClick={e => onClick(e, '/sales')}>Sales Data</ProfileButton>
      </Content>
    </ProfileStyles>
  )
}

export default withRouter(ProfileAdmin)
