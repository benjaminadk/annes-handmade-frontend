import Head from 'next/head'
import { frontend } from '../../config'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <meta charSet="utf-8" key="utf" />
      <link rel="shortcut icon" href="/static/favicon.png" key="favicon" />
      <link rel="stylesheet" type="text/css" href="/static/react-table.css" key="react_table" />

      <title>Anne's Handmade | Jewelry</title>
      <meta property="fb:app_id" content="2300738536877547" key="app_id" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:url" content={frontend} key="url" />
      <meta property="og:title" content={`Anne's Handmade | Jewelry`} key="title" />
      <meta
        property="og:description"
        content="Beautiful handmade, one-of-a-kind jewelry @ affordable prices. Check us out today!"
        key="description"
      />
      <meta
        property="og:image"
        content="https://s3-us-west-1.amazonaws.com/shopping-site/assets/homescreen-2.png"
        key="image"
      />
      <meta property="og:image:alt" content="Anne's Handmade" key="alt" />
      <meta property="og:image:width" content="756" key="width" />
      <meta property="og:image:height" content="636" key="height" />
      <meta property="og:image:type" content="image/png" key="image_type" />
      <meta property="og:site_name" content="Anne's Handmade" key="site_name" />
      <meta name="twitter:card" content="summary_large_image" key="tw_card" />
      <meta name="twitter:site" content="@BenjaminBrooke3" key="tw_site" />
    </Head>
  )
}
