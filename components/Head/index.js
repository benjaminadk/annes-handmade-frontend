import Head from 'next/head'
import { frontend } from '../../config'

export default function Meta({ product, title }) {
  return (
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/react-table.css" />
      <title>Anne's Handmade | {title}</title>
      <meta property="fb:app_id" content="2300738536877547" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Anne's Handmade | ${title}`} />
      <meta property="og:url" content={frontend} />
      <meta
        property="og:description"
        content="Beautiful handmade, one-of-a-kind jewelry @ affordable prices. Check us out today!"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BenjaminBrooke3" />
      {product ? (
        <>
          <meta property="og:title" content={`Anne's Handmade | ${product.title}`} />
          <meta property="og:image" content={product.images[0]} />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />
        </>
      ) : (
        <>
          <meta
            property="og:image"
            content="https://s3-us-west-1.amazonaws.com/shopping-site/assets/homescreen-2.png"
          />
          <meta property="og:image:width" content="756" />
          <meta property="og:image:height" content="636" />
          <meta property="og:image:type" content="image/png" />
        </>
      )}
    </Head>
  )
}
