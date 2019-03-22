import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import JewelryTypes from './JewelryTypes'
import BeadTypes from './BeadTypes'

export default class Catalog extends React.Component {
  onProductClick = variant => {
    if (!variant) {
      Router.push('/products')
    } else {
      Router.push({
        pathname: '/products',
        query: { variant, page: 1 }
      })
    }
  }

  onBeadClick = bead => {
    Router.push({ pathname: '/products', query: { bead, page: 1 } })
  }

  render() {
    return (
      <>
        <Head>
          <title>Anne's Handmade | Catalog</title>
        </Head>
        <JewelryTypes onClick={this.onProductClick} />
        <BeadTypes onClick={this.onBeadClick} />
      </>
    )
  }
}
