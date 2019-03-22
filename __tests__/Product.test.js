import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import Product from '../components/Product'
import { SINGLE_PRODUCT_QUERY } from '../apollo/query/product'
import { fakeProduct, mountWithTheme } from '../lib/testUtils'

describe('<Product/>', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        result: {
          data: {
            product: fakeProduct(),
            thumbIndex: 0
          }
        }
      }
    ]
    const wrapper = mountWithTheme(
      <MockedProvider mocks={mocks}>
        <Product query={{ id: '123' }} />
      </MockedProvider>
    )
    expect(wrapper.text()).toContain('Loading')
    await wait()
    wrapper.update()
    expect(wrapper.find('p.price')).toMatchSnapshot()
    expect(wrapper.find('p.description')).toMatchSnapshot()
    expect(wrapper.find('p.title')).toMatchSnapshot()
  })

  it('displays error when product is not found', async () => {
    const mocks = [
      {
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        result: {
          errors: [{ message: 'Product not found' }]
        }
      }
    ]
    const wrapper = mountWithTheme(
      <MockedProvider mocks={mocks}>
        <Product query={{ id: '123' }} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    const item = wrapper.find('[data-test="graphql-error"]')
    expect(item.text()).toContain('Product not found')
    expect(item).toMatchSnapshot()
  })
})
