import Link from 'next/link'
import Router from 'next/router'
import { SignupButtonStyles, Avatar } from './styles/SignupButton'

export default function SignupButton({ user }) {
  return (
    <SignupButtonStyles user={user}>
      {user ? (
        <Avatar onClick={() => Router.push('/signup')}>
          {user.image ? <img src={user.image} /> : <span>{user.name[0]}</span>}
        </Avatar>
      ) : (
        <Link href="/signup" prefetch>
          <button>Sign Up</button>
        </Link>
      )}
    </SignupButtonStyles>
  )
}
