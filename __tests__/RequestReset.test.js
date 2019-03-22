import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import { mountWithTheme } from '../lib/testUtils'
import { RESET_REQUEST_MUTATION } from '../apollo/mutation/requestReset'
import RequestReset from '../components/Register/ResetRequest'

const mocks = [
  {
    request: { query: RESET_REQUEST_MUTATION, variables: { email: 'test@gmail.com' } },
    result: {
      data: {
        requestReset: {
          success: true,
          message: 'email sent to test@gmail.com',
          __typename: 'Payload'
        }
      }
    }
  }
]

describe('<RequestReset />', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    )
    const form = wrapper.find('form[data-test="request-reset"]')
    expect(form).toMatchSnapshot()
  })

  it('call the request reset mutation', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    )

    // simulate typing email address
    wrapper.find('input').simulate('change', { target: { name: 'email', value: 'test@gmail.com' } })

    // submit the form
    wrapper.find('form').simulate('submit')
    await wait()
    wrapper.update()
    expect(wrapper.find('p').text()).toContain('email sent to test@gmail.com')
  })
})
