import { ErrorStyles } from './styles/DisplayError'

export default function DisplayError({ error }) {
  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="error">Error: {error.message.replace('GraphQL error: ', '')}</p>
      </ErrorStyles>
    ))
  }
  return (
    <ErrorStyles>
      <p data-test="error">Error: {error.message.replace('GraphQL error: ', '')}</p>
    </ErrorStyles>
  )
}
