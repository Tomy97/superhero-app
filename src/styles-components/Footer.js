import styled from 'styled-components'

export const FooterClass = styled.footer`
  background: #151515;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  @media (min-width: 768px) {
    flex-direction: row;
    position: absolute;
    bottom: 0;
  }
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
export const TextH3 = styled.h3`
  text-transform: capitalize;
`
