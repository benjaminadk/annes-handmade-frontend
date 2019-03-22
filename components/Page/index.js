import styled, { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
import theme from './theme'
import Meta from './Meta'
import GlobalStyles from './GlobalStyles'
import Header from '../Header'
import Footer from '../Footer'
import Loading from './Loading'
import User from '../Wrappers/User'

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-top: 7.5rem;
  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.grey[1]};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.grey[3]};
  }
`

export default class Page extends React.Component {
  componentDidMount() {
    Router.onRouteChangeStart = () => {
      NProgress.start()
    }
    Router.onRouteChangeComplete = () => {
      NProgress.done()
    }

    Router.onRouteChangeError = () => {
      NProgress.done()
    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <User>
          {({ data, loading }) => {
            if (loading) {
              return <>
              <GlobalStyles/>
              <Loading />
              </>
            }
            const user = data ? data.me : null
            return (
              <StyledPage>
                <Meta />
                <GlobalStyles />
                <Header user={user} />
                <Inner>
                  {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                      user
                    })
                  )}
                </Inner>
                <Footer />
              </StyledPage>
            )
          }}
        </User>
      </ThemeProvider>
    )
  }
}
