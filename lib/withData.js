import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { SIGNUP_QUERY } from '../apollo/query/showSignup'
import { CART_QUERY } from '../apollo/query/cart'
import { THUMB_QUERY } from '../apollo/query/thumb'
import { backend } from '../config'

function createClient({ headers }) {
  return new ApolloClient({
    uri: backend,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleSignup(_, variables, { cache }) {
            const { showSignup } = cache.readQuery({
              query: SIGNUP_QUERY
            })
            cache.writeQuery({
              query: SIGNUP_QUERY,
              data: { showSignup: variables.show }
            })
            return null
          },
          toggleCart(_, variables, { cache }) {
            const { cartOpen } = cache.readQuery({
              query: CART_QUERY
            })
            cache.writeQuery({
              query: CART_QUERY,
              data: { cartOpen: !cartOpen }
            })
            return null
          },
          updateThumbIndex(_, variables, { cache }) {
            cache.writeQuery({ query: THUMB_QUERY, data: { thumbIndex: variables.index } })
            return null
          }
        }
      },
      defaults: {
        showSignup: 'signin',
        cartOpen: false,
        thumbIndex: 0
      }
    }
  })
}

export default withApollo(createClient)
