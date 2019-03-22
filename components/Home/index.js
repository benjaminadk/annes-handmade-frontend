import { withRouter } from 'next/router'
import HeadWithLogo from '../Head/HeadWithLogo'
import { Container, Top, Middle, Headline, SubHeadline, Action } from './styles/Home'

function Home({ router }) {
  return (
    <>
      <HeadWithLogo />
      <Container>
        <Top>
          <Headline>Anne's Handmade</Headline>
          <SubHeadline>One of a kind necklaces, bracelets and earrings</SubHeadline>
        </Top>
        <Middle>
          <div
            className="item"
            onClick={() =>
              router.push({ pathname: '/products', query: { variant: 'NECKLACE', page: 1 } })
            }
          >
            <img
              className="img1"
              src="https://shopping-site.s3.amazonaws.com/images/unknown-3-necklace-1-opt"
            />
            <Action>Shop Necklaces</Action>
          </div>
          <div
            className="item"
            onClick={() =>
              router.push({ pathname: '/products', query: { variant: 'BRACELET', page: 1 } })
            }
          >
            <img src="https://shopping-site.s3.amazonaws.com/images/multi-bracelet-another-peace-1-opt" />
            <Action>Shop Bracelets</Action>
          </div>
          <div
            className="item"
            onClick={() =>
              router.push({ pathname: '/products', query: { variant: 'EARRINGS', page: 1 } })
            }
          >
            <img src="https://shopping-site.s3.amazonaws.com/images/earings-2-1-opt" />
            <Action>Shop Earrings</Action>
          </div>
        </Middle>
      </Container>
    </>
  )
}

export default withRouter(Home)
