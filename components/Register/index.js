import { Mutation, Query } from 'react-apollo'
import { adopt } from 'react-adopt'
import Profile from '../Profile'
import Signin from './Signin'
import Signup from './Signup'
import ResetRequest from './ResetRequest'
import { SIGNUP_QUERY } from '../../apollo/query/showSignup'
import { TOGGLE_SHOW_SIGNUP_MUTATION } from '../../apollo/mutation/toggleSignup'
import { RegisterStyles } from './styles/Register'

const Composed = adopt({
  localState: ({ render }) => <Query query={SIGNUP_QUERY}>{render}</Query>,
  toggleSignup: ({ render }) => <Mutation mutation={TOGGLE_SHOW_SIGNUP_MUTATION}>{render}</Mutation>
})

export default function Register({ user }) {
  return (
    <Composed>
      {({ localState, toggleSignup }) => {
        const showLogout = user
        const showSignup = localState.data.showSignup
        if (showLogout) {
          return <Profile user={user} />
        } else if (showSignup === 'signup') {
          return (
            <RegisterStyles>
              <Signup toggleSignup={toggleSignup} />
            </RegisterStyles>
          )
        } else if (showSignup === 'signin') {
          return (
            <RegisterStyles>
              <Signin toggleSignup={toggleSignup} />
            </RegisterStyles>
          )
        } else {
          return (
            <RegisterStyles>
              <ResetRequest toggleSignup={toggleSignup} />
            </RegisterStyles>
          )
        }
      }}
    </Composed>
  )
}
