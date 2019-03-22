import React from 'react'
import Link from 'next/link'
import SignupButton from './SignupButton'
import CartButton from './CartButton'
import Cart from '../Cart'
import Search from './Search'
import { HeaderStyles, Logo } from './styles/Header'
import { logoEyesOpen, logoEyesClosed } from '../../config'

export default class Header extends React.Component {
  state = {
    hovered: false
  }

  onMouseOver = () => this.setState({ hovered: true })

  onMouseOut = () => this.setState({ hovered: false })

  render() {
    const {
      props: { user },
      state: { hovered }
    } = this
    return (
      <HeaderStyles data-test="header">
        <div className="bar">
          <Link href="/" prefetch>
            <Logo
              onClick={this.onLogoClick}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
            >
              <img src={hovered ? logoEyesOpen : logoEyesClosed} />
            </Logo>
          </Link>
          <div className="links">
            <Link href="/catalog" prefetch>
              <a>Catalog</a>
            </Link>
            <Link href="/about" prefetch>
              <a className="about">About</a>
            </Link>
          </div>
          <Search />
          <SignupButton user={user} />
          {user && <CartButton count={user.cart.length} />}
        </div>
        {user && <Cart user={user} />}
      </HeaderStyles>
    )
  }
}
