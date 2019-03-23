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
  id: '123',
  name: casual.name,
  email: casual.email,
  role: 'ADMIN',
  image: 'image.png',
  orders: [],
  cart: []
})

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  images: [`${casual.word}.jpg`],
  title: casual.words(),
  price: 5000,
  description: casual.words(),
  variant: 'NECKLACE',
  bead: 'RED_JASPER'
})

const fakeOrder = () => ({
  __typename: 'Order',
  id: '123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  shipped: false,
  createdAt: '2018-04-06T19:24:16.000Z',
  user: fakeUser()
})

const fakeCartItem = overrides => ({
  __typename: 'CartItem',
  id: '123',
  product: fakeProduct(),
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
