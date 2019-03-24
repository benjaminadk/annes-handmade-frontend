import Head from 'next/head'
import { frontend } from '../../config'

export default function HeadWithLogo() {
  return (
    <Head>
      <title>Anne's Handmade | Jewelry</title>
      <meta property="fb:app_id" content="2300738536877547" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={frontend} />
      <meta property="og:title" content={`Anne's Handmade | Jewelry`} />
      <meta
        property="og:description"
        content="Beautiful handmade, one-of-a-kind jewelry @ affordable prices. Check us out today!"
      />
      <meta
        property="og:image"
        content="https://s3-us-west-1.amazonaws.com/shopping-site/assets/homescreen-2.png"
      />
      <meta property="og:image:alt" content="Anne's Handmade" />
      <meta property="og:image:width" content="756" />
      <meta property="og:image:height" content="636" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Anne's Handmade" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BenjaminBrooke3" />
    </Head>
  )
}
