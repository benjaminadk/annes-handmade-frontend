import casual from 'casual'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../components/Page/theme'

const mountWithTheme = component => mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

const createEvent = (name, value) => ({ target: { name, value } })

casual.seed(666)

const fakeProduct = () => ({
  __typename: 'Product',
  id: '123',
  title: 'A Fake Product',
  description: 'This is not really real.',
  variant: 'NECKLACE',
  bead: 'RED_JASPER',
  images: ['image1.png', 'image2.png'],
  price: 1000
})

const fakeUser = () => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  role: 'ADMIN',
  image: 'https://fake.png',
  orders: [],
  cart: []
})

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  images: [`${casual.word}.jpg`],
  title: casual.words(),
  price: 4234,
  description: casual.words(),
  variant: 'FAKELACE',
  bead: 'FAKILLIUM'
})

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  shipped: false,
  createdAt: '2018-04 - 06T19: 24: 16.000Z',
  user: fakeUser()
})

const fakeCartItem = overrides => ({
  __typename: 'CartItem',
  id: 'omg123',
  item: fakeProduct(),
  user: fakeUser(),
  ...overrides
})

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }
}

export {
  LocalStorageMock,
  fakeProduct,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
  mountWithTheme,
  createEvent
}
