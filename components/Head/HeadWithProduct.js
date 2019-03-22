import Head from 'next/head'
import { frontend } from '../../config'

export default function HeadWithProduct({ product }) {
  return (
    <Head>
      <title>Anne's Handmade | {product.title}</title>
      <meta property="fb:app_id" content="2300738536877547" />
      <meta property="og:type" content="product.item" />
      <meta property="og:title" content={`Anne's Handmade | ${product.title}`} />
      <meta
        property="og:description"
        content="Beautiful handmade, one-of-a-kind jewelry @ affordable prices. Check us out today!"
      />
      <meta property="og:image" content={product.images[0]} />
      <meta property="og:image:alt" content={product.title} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:url" content={`${frontend}/product?id=${product.id}`} />
      <meta property="og:site_name" content="Anne's Handmade" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
