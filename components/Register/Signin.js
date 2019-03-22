import { Mutation } from 'react-apollo'
import { SIGNIN_MUTATION } from '../../apollo/mutation/signin'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import DisplayError from '../DisplayError'
import { Form, FormButton } from './styles/Form'
import GoogleButton from './GoogleButton'
import Input from './Input'

export default class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleSubmit = async (e, signin) => {
    e.preventDefault()
    await signin()
    this.setState({ email: '', password: '' })
  }

  toggleForm = show => this.props.toggleSignup({ variables: { show } })

  render() {
    const {
      state: { email, password }
    } = this
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={{ email, password }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <Form method="POST" onSubmit={e => this.handleSubmit(e, signin)} error={error}>
            <div className="header">Sign In</div>
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="switch" onClick={() => this.toggleForm('signup')}>
                Just getting started? 👍 Sign Up.
              </div>
              <Input
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={this.handleChange}
              />
              <div className="switch" onClick={() => this.toggleForm('reset')}>
                Forgot Password? 🔑 Click to reset.
              </div>
              <DisplayError error={error} />
              <div className="actions">
                <FormButton type="submit">Sign In</FormButton>
                <GoogleButton mode="signin" />
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}
