import styled from 'styled-components'

export const Center = styled.div`
  text-align: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 80px;
  justify-items: center;
  align-items: center;
  margin: 10rem 0;
`
