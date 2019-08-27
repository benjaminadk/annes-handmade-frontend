import React from 'react'
import Router from 'next/router'
import { BEAD_TYPES, JEWELRY_TYPES } from '../../lib/catalogHelpers'
import { Title, Container, Tile } from './styles'

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
        <Title>
          <div>Catalog</div>
        </Title>
        <Container>
          {JEWELRY_TYPES.map((el, i) => {
            const variant = i === 0 ? null : el.name.toUpperCase()
            return (
              <Tile key={el.name} onClick={() => this.onProductClick(variant)}>
                <div className='display'>
                  <img src={el.src} />
                  <span className='label'>{el.name}</span>
                </div>
                <div className='overlay'>
                  <span>{el.name}</span>
                </div>
              </Tile>
            )
          })}
          {BEAD_TYPES.map(el => (
            <Tile
              key={el.name}
              onClick={() => this.onBeadClick(el.name.toUpperCase().replace(/\s/g, '_'))}
            >
              <div className='display'>
                <img src={el.src} />
                <span className='label'>{el.name}</span>
              </div>
              <div className='overlay'>
                <span>{el.quality}</span>
              </div>
            </Tile>
          ))}
        </Container>
      </>
    )
  }
}
