import { Mutation } from 'react-apollo'
import debounce from 'lodash.debounce'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import { RESET_MUTATION } from '../../apollo/mutation/resetPassword'
import { Form, FormButton } from '../Register/styles/Form'
import { Message } from '../styles/Message'
import { Container } from './styles/ResetPassword'
import DisplayError from '../DisplayError'
import Input from '../Register/Input'
import Head from '../Head'
import scorePassword from '../../lib/scorePassword'

export default class ResetPassword extends React.Component {
  state = {
    password: '',
    confirmPassword: '',
    pwd: 0
  }

  handleChange = ({ target: { name, value } }) => {
    if (name === 'password') {
      this.handlePassword(value)
    }
    this.setState({ [name]: value })
  }

  handlePassword = debounce(value => this.setState({ pwd: scorePassword(value) }), 1000)

  handleSubmit = async (e, resetPassword) => {
    e.preventDefault()
    await resetPassword()
    this.setState({ password: '', confirmPassword: '' })
  }

  render() {
    const {
      props: {
        query: { resetToken }
      },
      state: { password, confirmPassword, pwd }
    } = this
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{ resetToken, password, confirmPassword, pwd }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetPassword, { error, loading, called }) => (
          <Container>
            <Head title="Reset Password" />
            <Form method="POST" onSubmit={e => this.handleSubmit(e, resetPassword)}>
              <div className="header">Reset Password</div>
              <fieldset disabled={loading} aria-busy={loading}>
                <div className="switch" />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  pwd={pwd}
                  showQuality
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
                {!error && !loading && called && <Message>Your password has been updated</Message>}
                <DisplayError error={error} />
                <FormButton type="submit">Reset{loading ? 'ing' : ''} Your Password</FormButton>
              </fieldset>
            </Form>
          </Container>
        )}
      </Mutation>
    )
  }
}
