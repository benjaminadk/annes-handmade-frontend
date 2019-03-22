import { Mutation } from 'react-apollo'
import { RESET_REQUEST_MUTATION } from '../../apollo/mutation/requestReset'
import DisplayError from '../DisplayError'
import { Message } from '../styles/Message'
import { Form, FormButton } from './styles/Form'
import Input from './Input'

export default class ResetRequest extends React.Component {
  state = {
    email: ''
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleSubmit = async (e, requestReset) => {
    e.preventDefault()
    await requestReset({ variables: { email: this.state.email } })
    this.setState({ email: '' })
  }

  toggleForm = show => this.props.toggleSignup({ variables: { show } })

  render() {
    const {
      state: { email }
    } = this
    return (
      <Mutation mutation={RESET_REQUEST_MUTATION}>
        {(requestReset, { data, loading, error, called }) => (
          <Form
            data-test="request-reset"
            method="POST"
            onSubmit={e => this.handleSubmit(e, requestReset)}
          >
            <div className="header">Reset Password</div>
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="switches">
                <span className="switch" onClick={() => this.toggleForm('signin')}>
                  Sign In
                </span>
                <span className="divider">{'  |  '}</span>
                <span className="switch" onClick={() => this.toggleForm('signup')}>
                  Sign Up
                </span>
              </div>
              <Input
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={this.handleChange}
              />
              <DisplayError error={error} />
              {!error && !loading && called && (
                <Message>
                  <p>{data.requestReset.message}</p>
                </Message>
              )}
              <FormButton type="submit">Request{loading ? 'ing' : ''} Password Reset</FormButton>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}
