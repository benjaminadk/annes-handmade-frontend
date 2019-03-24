import App, { Container } from 'next/app'
import NextSeo from 'next-seo'
import Page from '../components/Page'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'
import SEO from '../next-seo.config'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    pageProps.pathname = ctx.pathname
    return { pageProps }
  }
  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <NextSeo config={SEO} />
        <ApolloProvider client={apollo}>
          <Page {...pageProps}>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp)
