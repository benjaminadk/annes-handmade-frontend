import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import Pagination from '../components/Products/Pagination'
import { PAGINATION_QUERY } from '../apollo/query/productsCount'
import { mountWithTheme } from '../lib/testUtils'

const where = { variant: 'NECKLACE', bead: 'RED_JASPER', sold: false }

function makeMocksFor(length) {
  return [
    {
      request: {
        query: PAGINATION_QUERY,
        variables: { where }
      },
      result: {
        data: {
          productsCount: {
            __typename: 'Count',
            count: length
          }
        }
      }
    }
  ]
}

describe('<Pagination />', () => {
  it('displays a loading message', () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={makeMocksFor(1)}>
        <Pagination page={1} where={where} />
      </MockedProvider>
    )
    const pagination = wrapper.find('[data-test="pagination"]')
    expect(pagination.length).toBeGreaterThan(1)
    expect(pagination).toMatchSnapshot()
  })

  it('renders pagination for 36 items', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={makeMocksFor(36)}>
        <Pagination page={1} where={where} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('.totalPages').text()).toEqual('5')
    const pagination = wrapper.find('[data-test="pagination"]')
    expect(pagination).toMatchSnapshot()
  })

  it('disables "prev" button on first page', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={makeMocksFor(36)}>
        <Pagination page={1} where={where} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('a.prev').prop('aria-disabled')).toBe(true)
    expect(wrapper.find('a.next').prop('aria-disabled')).toBe(false)
  })

  it('disables "next" button on last page', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={makeMocksFor(36)}>
        <Pagination page={5} where={where} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('a.prev').prop('aria-disabled')).toBe(false)
    expect(wrapper.find('a.next').prop('aria-disabled')).toBe(true)
  })

  it('enables all buttons on middle page', async () => {
    const wrapper = mountWithTheme(
      <MockedProvider mocks={makeMocksFor(36)}>
        <Pagination page={3} where={where} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('a.prev').prop('aria-disabled')).toBe(false)
    expect(wrapper.find('a.next').prop('aria-disabled')).toBe(false)
  })
})
