import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import { mountWithTheme, createEvent, fakeProduct } from '../lib/testUtils'
import { CREATE_PRODUCT_MUTATION } from '../apollo/mutation/createProduct'
import CreateProduct from '../components/CreateProduct'

describe('<CreateProduct />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mountWithTheme(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    )
    const form = wrapper.find('form[data-test="create-product"]')
    expect(form).toMatchSnapshot()
  })

  it('handle text input updates', () => {
    const wrapper = mountWithTheme(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    )
    wrapper.find('#title').simulate('change', createEvent('title', 'Product Title'))
    wrapper
      .find('#description')
      .simulate('change', createEvent('description', 'Product Description'))
    wrapper.find('#price').simulate('change', createEvent('price', 2000))
    wrapper.find('#variant').simulate('change', createEvent('variant', 'NECKLACE'))
    wrapper.find('#bead').simulate('change', createEvent('bead', 'AVENTURINE'))

    expect(wrapper.find('CreateProduct').instance().state).toMatchObject({
      title: 'Product Title',
      description: 'Product Description',
      price: 2000,
      variant: 'NECKLACE',
      bead: 'AVENTURINE'
    })
  })
})
