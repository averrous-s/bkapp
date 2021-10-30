import styled from 'styled-components'

export const MobileNavbarContainer = styled.div`
  width: 95%;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 15px;
  position: absolute;
  bottom: 2%;
  right: 2.5%;
  visibility: hidden;
  background: aquamarine;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 600px){
    visibility: visible;
  }
`

export const Choice = styled.div`
    width: 20%;
    height: 70%;
`