import { GoogleLogin } from 'react-google-login'
import { withApollo } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { GOOGLE_SIGNUP_MUTATION } from '../../apollo/mutation/googleSignup'
import { FormButton } from './styles/Form'
import { googleClientId } from '../../config'

class GoogleButton extends React.Component {
  onSuccess = async response => {
    const {
      profileObj: { googleId, email, image, name }
    } = response
    const data = { googleId, email, name, image }
    await this.props.client
      .mutate({
        mutation: GOOGLE_SIGNUP_MUTATION,
        variables: { data },
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
      })
      .catch(console.error)
  }

  onFailure = res => {
    console.log(res)
  }

  render() {
    const mode = this.props.mode
    return (
      <GoogleLogin
        clientId={googleClientId}
        onSuccess={this.onSuccess}
        onFailure={this.onFailure}
        scope="profile email"
        render={props => (
          <FormButton onClick={props.onClick}>
            Sign {mode === 'signup' ? 'Up' : 'In'} with Google
          </FormButton>
        )}
      />
    )
  }
}

export default withApollo(GoogleButton)
