import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import { mountWithTheme, fakeUser, fakeCartItem } from '../lib/testUtils'
import Cart from '../components/Cart'

describe('<Cart />', () => {
  it('displays user name in header', async () => {
    const user = {
      ...fakeUser(),
      cart: []
    }
    const wrapper = mountWithTheme(
      <MockedProvider>
        <Cart user={user} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('.title').text()).toBe(`${user.name}'s Cart`)
  })

  it('displays a cart item if user has one', async () => {
    const user = {
      ...fakeUser(),
      cart: [fakeCartItem()]
    }
    const wrapper = mountWithTheme(
      <MockedProvider>
        <Cart user={user} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('[data-test="cart"]')).toMatchSnapshot()
    expect(wrapper.find('CartItem')).toHaveLength(1)
  })

  it('displays a message if user has no cart items', async () => {
    const user = {
      ...fakeUser(),
      cart: []
    }
    const wrapper = mountWithTheme(
      <MockedProvider>
        <Cart user={user} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('[data-test="cart"]')).toMatchSnapshot()
    expect(wrapper.find('.message').text()).toBe('Empty Cart')
  })

  it('displays sub-total, tax and total for cart items', async () => {
    const user = {
      ...fakeUser(),
      cart: [fakeCartItem()]
    }
    const wrapper = mountWithTheme(
      <MockedProvider>
        <Cart user={user} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    const totals = wrapper.find('div.totals').children()
    expect(totals.at(0).text()).toBe('Subtotal: $10')
    expect(totals.at(1).text()).toBe('Tax: $0.80')
    expect(totals.at(2).text()).toBe('$10.80')
  })
})
