import styled from 'styled-components'
import image from '../assets/img/imgm&dc.jpg'

export const Image = styled.img`
  position: absolute;
  @media (min-width: 350px) and (max-width: 1024px) {
    min-height: 100vh;
    max-height: 100vh;
    width: 100%;
    height: auto;
    background: url(${image}) no-repeat center center;
    z-index: 1;
  }
  @media (min-width: 1024px) {
    background: url(${image}) no-repeat center center;
    width: 50vw;
    min-height: 100vh;
    display: flex;
    justify-content: start;
  }
`

export const FormX = styled.div`
  display: flex;
  @media (min-width: 350px) and (max-width: 1024px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  @media (min-width: 1024px) {
    width: 100vw;
    justify-content: end;
    align-items: center;
  }
`
