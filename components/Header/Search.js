import Router from 'next/router'
import Downshift, { resetIdCounter } from 'downshift'
import { ApolloConsumer } from 'react-apollo'
import debounce from 'lodash.debounce'
import { SearchStyles, DropDown, DropDownItem } from './styles/Search'
import { SEARCH_PRODUCTS_QUERY } from '../../apollo/query/searchProducts'

export default class Search extends React.Component {
  state = {
    loading: false,
    executed: false,
    items: []
  }

  handleChange = debounce(async (e, client) => {
    this.setState({ loading: true })
    const res = await client.query({
      query: SEARCH_PRODUCTS_QUERY,
      variables: { term: e.target.value }
    })
    this.setState({ items: res.data.products, loading: false, executed: true })
  }, 500)

  onChange = item => {
    Router.push({
      pathname: '/product',
      query: {
        id: item.id
      }
    })
  }

  render() {
    resetIdCounter()
    const {
      state: { loading, executed, items }
    } = this
    return (
      <SearchStyles>
        <Downshift
          onChange={this.onChange}
          itemToString={item => (item === null ? '' : item.title)}
        >
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search for Jewelry 💎',
                      id: 'search',
                      className: loading ? 'loading' : '',
                      onChange: e => {
                        e.persist()
                        this.handleChange(e, client)
                      }
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {items.map((el, i) => (
                    <DropDownItem
                      key={el.id}
                      highlighted={i === highlightedIndex}
                      {...getItemProps({ item: el })}
                    >
                      <img src={el.images[0]} />
                      {el.title}
                    </DropDownItem>
                  ))}
                  {!items.length && !loading && executed && (
                    <DropDownItem>
                      <span/>
                      <span>
                        No Results for <span className='term'> "{inputValue}"</span>
                      </span>
                    </DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    )
  }
}
