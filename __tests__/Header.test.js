import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import Header from '../components/Header'
import { CURRENT_USER_QUERY } from '../apollo/query/me'
import { fakeUser, mountWithTheme } from '../lib/testUtils'

const notSignedUpMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
]

const signedUpMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
]

describe('<Header/>', () => {
  it('renders a sign up button when user is signed out', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={notSignedUpMocks}>
        <Header />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.text()).toContain('Sign Up')
    const header = wrapper.find('[data-test="header"]')
    expect(header).toMatchSnapshot()
  })
})
