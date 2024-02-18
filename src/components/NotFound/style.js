import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 60vw;
`

export const NotFoundHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
`

export const NotFoundPara = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
export const Img = styled.img`
  height: 300px;
  width: 250px;
`
export default NotFoundContainer
