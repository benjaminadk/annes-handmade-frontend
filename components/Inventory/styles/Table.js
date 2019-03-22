import styled from 'styled-components'

export const Column = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 0 2rem 2rem;
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 1.75rem;
  padding: 0.5rem 0;
`

export const Sold = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 2rem;
`

export const Price = styled.div`
  font-size: 2rem;
  text-align: center;
`

export const Images = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  img {
    border: 1px solid ${props => props.theme.grey[2]};
    background: white;
    cursor: zoom-in;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 2.25rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export const EditButton = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  background: none;
  cursor: pointer;
`

export const Total = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
`
