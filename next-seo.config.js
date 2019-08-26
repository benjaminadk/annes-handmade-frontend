import { frontend } from './config'

export default {
  titleTemplate: `Anne's Handmade | %s`,
  title: 'Home',
  description: 'One of a kind, handmade jewelry @ affordable prices. 💎',
  canonical: frontend,
  facebook: {
    appId: '2300738536877547'
  },
  openGraph: {
    type: 'website',
    url: frontend,
    title: "Anne's Handmade | Home",
    description: 'One of a kind, handmade jewelry @ affordable prices. 💎',
    site_name: "Anne's Handmade",
    images: [
      {
        url: 'https://s3-us-west-1.amazonaws.com/shopping-site/assets/open-graph-2.jpeg',
        width: '800',
        height: '800',
        alt: "Anne's Handmade Logo"
      }
    ]
  },
  twitter: {
    handle: '@BenjaminBrooke3',
    site: '@BenjaminBrooke3',
    cardType: 'summary_large_image'
  }
}
