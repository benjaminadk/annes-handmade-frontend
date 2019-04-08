import { Mutation } from 'react-apollo'
import debounce from 'lodash.debounce'
import { Form, FormButton } from './styles/Form'
import { SIGNUP_MUTATION } from '../../apollo/mutation/signup'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import scorePassword from '../../lib/scorePassword'
import DisplayError from '../DisplayError'
import Input from './Input'
import GoogleButton from './GoogleButton'

export default class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordType: 'password',
    pwd: 0
  }

  handlePassword = debounce(
    value => this.setState({ pwd: scorePassword(value) }),
    1000
  )

  handleChange = e => {
    const { name, value } = e.target
    if (name === 'password') {
      this.handlePassword(value)
    }
    this.setState({ [name]: value })
  }

  handleSubmit = async (e, signup) => {
    e.preventDefault()
    await signup()
    this.setState({ name: '', email: '', password: '' })
  }

  toggleForm = show => this.props.toggleSignup({ variables: { show } })

  togglePasswordType = () =>
    this.setState(({ passwordType }) => ({
      passwordType: passwordType === 'password' ? 'text' : 'password'
    }))

  render() {
    const {
      state: { email, name, password, passwordType, pwd }
    } = this
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method='POST'
            onSubmit={e => this.handleSubmit(e, signup)}
            error={error}
          >
            <div className='header'>Sign Up</div>
            <fieldset disabled={loading} aria-busy={loading}>
              <div className='switch' onClick={() => this.toggleForm('signin')}>
                Have an account? 👆 Sign In.
              </div>
              <Input
                type='email'
                label='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <Input
                type='name'
                label='Name'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <Input
                type={passwordType}
                label='Password'
                name='password'
                value={password}
                pwd={pwd}
                showQuality
                togglePasswordType={this.togglePasswordType}
                onChange={this.handleChange}
              />
              <DisplayError error={error} />
              <div className='actions'>
                <FormButton type='submit'>Sign Up</FormButton>
                <GoogleButton mode='signup' />
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}
