const isDev = process.env.NODE_ENV !== 'production'

export const perPage = 8

export const frontend = isDev ? 'http://localhost:4000' : 'http://anneshandmade.com'

export const backend = isDev ? 'http://localhost:4001/graphql' : 'http://anneshandmade.com/graphql'

export const stripeKey = isDev
  ? 'pk_test_htV5BwONms8PGEJ4RVZgsOgU'
  : 'pk_live_5lTK5oZxQ4f4ZdTyfu6TY5xS'

export const googleClientId =
  '617571762552-2tqlbvbqus23850vr8bokp226m5gqhcn.apps.googleusercontent.com'

const ROOT_URL = `https://s3-us-west-1.amazonaws.com/shopping-site/assets/`

export const logoEyesOpen = `${ROOT_URL}buddha-logo-eyes.png`

export const logoEyesClosed = `${ROOT_URL}buddha-logo.png`
