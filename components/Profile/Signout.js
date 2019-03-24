import { Mutation } from 'react-apollo'
import NProgress from 'nprogress'
import { SIGNOUT_MUTATION } from '../../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { ProfileStyles, Title, Description, Content, ProfileButton } from './styles/Profile'

export default function Signout() {
  const onClick = async (e, signout) => {
    NProgress.start()
    e.preventDefault()
    await signout()
    NProgress.done()
  }

  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      awaitRefetchQueries={true}
    >
      {(signout, { loading }) => (
        <ProfileStyles>
          <div>
            <Title>Sign Out</Title>
            <Description>Sign out of your account.</Description>
          </div>
          <Content>
            <ProfileButton onClick={e => onClick(e, signout)}>
              Sign{loading ? 'ing' : ''} Out
            </ProfileButton>
          </Content>
        </ProfileStyles>
      )}
    </Mutation>
  )
}
