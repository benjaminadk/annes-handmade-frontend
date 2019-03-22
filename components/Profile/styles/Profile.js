import styled from 'styled-components'
import { GreenButton } from '../../styles/GreenButton'
import media from '../../styles/media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const ProfileStyles = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  grid-gap: 5rem;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.grey[2]};
  padding: 3rem 0;
  ${media.tablet`
    grid-template-columns: 1fr; 
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    padding: 1rem 0 3rem;
  `}
`

export const Title = styled.div`
  background: ${props => props.theme.black};
  color: white;
  border-left: 10px solid ${props => props.theme.secondary};
  font-size: 3rem;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
`

export const Description = styled.div`
  font-size: 1.4rem;
  text-align: center;
`

export const Content = styled.form`
  width: 85%;
  justify-self: center;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  border: 2px solid ${props => props.theme.grey[2]};
  padding: 2rem 0 0;
  background: ${props => props.theme.grey[0]};
  ${media.tablet`
      width: 100%; 
      padding: 1rem .5rem 0 .5rem;
    `}
  label, button {
    width: 75%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: space-between;
    margin-bottom: 2rem;
    ${media.phone`
        width: 100%;
      `}
  }
  input {
    margin-left: 1rem;
  }
`

export const Stat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  & > :first-child {
    align-self: center;
  }
  & > :last-child {
    align-self: center;
    width: ${props => (props.digits && props.digits > 5 ? `${props.digits * 2}rem` : '10rem')};
    text-align: center;
    font-size: 2rem;
    border: 1px solid ${props => props.theme.grey[2]};
    background: white;
  }
`

export const Thumbnails = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin-bottom: 1rem;
  ${media.phone`
    width: 100%;
  `}
  img {
    width: 3rem;
    height: 3rem;
  }
`

export const ProfileButton = styled(GreenButton)`
  font-size: 1.75rem;
  padding: 1rem;
`
