import Link from 'next/link'
import { FooterStyles } from './styles/Footer'

export default function Footer() {
  return (
    <FooterStyles>
      <div className="info">
        <Link href="/privacy" prefetch>
          <a>Privacy</a>
        </Link>
      </div>
      <div className="info">
        <Link href="/shipping" prefetch>
          <a>Shipping</a>
        </Link>
      </div>
      <a className="social" href="https://www.facebook.com/annelikesbeads/" target="_blank">
        <img
          src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/fb-con-50x50-green.svg"
          width="50"
        />
      </a>
    </FooterStyles>
  )
}
