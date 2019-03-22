import { Mutation } from 'react-apollo'
import { SIGNOUT_MUTATION } from '../../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { ProfileStyles, Title, Description, Content, ProfileButton } from './styles/Profile'

export default function Signout() {
  const onClick = (e, signout) => {
    e.preventDefault()
    signout()
  }

  return (
    <Mutation mutation={SIGNOUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
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
