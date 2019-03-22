import { Query } from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight'
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft'
import { PaginationStyles } from './styles/Pagination'
import { perPage } from '../../config'
import { PAGINATION_QUERY } from '../../apollo/query/productsCount'

function populateTitle(page, pages, { variant, bead }) {
  const msg = variant ? variant : bead ? bead : ''
  if (msg) {
    return `Anne's Handmade | ${msg.replace('_', ' ')}`
  } else {
    return `Anne's Handmade | Page ${page} of ${pages}`
  }
}

function populateQuery(dir, where, page) {
  let newPage = dir === 'prev' ? page - 1 : page + 1
  if (where.bead) {
    return {
      page: newPage,
      bead: where.bead
    }
  }
  if (where.variant) {
    return {
      page: newPage,
      variant: where.variant
    }
  }
  return {
    page: newPage
  }
}

function getCountMessage(count) {
  return `${count} Item${count === 1 ? '' : 's'}`
}

export default function Pagination({ page, where }) {
  return (
    <PaginationStyles data-test="pagination">
      <Query query={PAGINATION_QUERY} variables={{ where }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>
          const count = data.productsCount.count
          const pages = Math.ceil(count / perPage)
          return (
            <>
              <Head>
                <title>{populateTitle(page, pages, where)}</title>
              </Head>
              <Link
                href={{
                  pathname: '/products',
                  query: populateQuery('prev', where, page)
                }}
                prefetch
              >
                <a className="prev" aria-disabled={page <= 1}>
                  <KeyboardArrowLeft size={20} />
                  <span>Prev</span>
                </a>
              </Link>
              <p>
                {page} of <span className="totalPages">{pages}</span>
              </p>
              <Link href="/catalog" prefetch>
                <a>Catalog</a>
              </Link>
              <p>{getCountMessage(count)}</p>
              <Link
                href={{
                  pathname: '/products',
                  query: populateQuery('next', where, page)
                }}
                prefetch
              >
                <a className="next" aria-disabled={page >= pages}>
                  <span>Next</span>
                  <KeyboardArrowRight size={20} />
                </a>
              </Link>
            </>
          )
        }}
      </Query>
    </PaginationStyles>
  )
}
