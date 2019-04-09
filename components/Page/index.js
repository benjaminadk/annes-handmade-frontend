import styled, { ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import theme from './theme'
import GlobalStyles from './GlobalStyles'
import Header from '../Header'
import Footer from '../Footer'
import Loading from './Loading'
import User from '../Wrappers/User'

const StyledPage = styled.div`
  background: ${props =>
    props.pathname === '/' ? lighten(0.2, props.theme.secondary) : 'white'};
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

function GlobalHead() {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='/static/favicon.png' />
      <link rel='stylesheet' type='text/css' href='/static/react-table.css' />
    </Head>
  )
}

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
    const { children, pathname } = this.props
    return (
      <ThemeProvider theme={theme}>
        <User>
          {({ data, loading }) => {
            if (loading) {
              return (
                <>
                  <GlobalHead />
                  <GlobalStyles />
                  <Loading />
                </>
              )
            }
            const user = data ? data.me : null
            return (
              <StyledPage pathname={pathname}>
                <GlobalHead />
                <GlobalStyles />
                <Header user={user} />
                <Inner>
                  {React.Children.map(children, child =>
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
