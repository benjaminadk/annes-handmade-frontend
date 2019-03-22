import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import PleaseSignUp from '../components/Wrappers/PleaseSignUp'
import { CURRENT_USER_QUERY } from '../apollo/query/me'
import { SIGNUP_QUERY } from '../apollo/query/showSignup'
import { fakeUser, mountWithTheme } from '../lib/testUtils'

const notSignedUpMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  },
  {
    request: { query: SIGNUP_QUERY },
    result: { data: { showSignup: 'signin' } }
  }
]

const signedUpMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
]

describe('<PleaseSignUp/>', () => {
  it('renders the sign in component to logged out users', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={notSignedUpMocks}>
        <PleaseSignUp />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.text()).toContain('Sign In')
  })

  it('renders the child component to logged in users', async () => {
    const Child = () => <p>I'm a child.</p>
    const wrapper = mountWithTheme(
      <MockedProvider mocks={signedUpMocks}>
        <PleaseSignUp>
          <Child />
        </PleaseSignUp>
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.contains(<Child />)).toBe(true)
  })
})
