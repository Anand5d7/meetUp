import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
`

export const Name = styled.h1`
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 15px;
  margin: 0px;
`

export const Topic = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 0px;
  padding-bottom: 50px;
  font-size: 30px;
`
export const Image = styled.img`
  height: 400px;
  width: 70%;
`

export const HomeHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 35px;
  margin: 0px;
  padding-bottom: 15px;
`

export const HomePara = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 15px;
  margin: 0px;
`

export const Button = styled.button`
  background-color: #2563eb;
  height: 35px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`
export default HomeContainer
