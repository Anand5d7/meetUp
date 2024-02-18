import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 60vw;
`

export const RegisterImg = styled.img`
  height: 350px;
  width: 40%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  height: 30px;
  width: 100%;
  color: #000;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #7b8794;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  height: 35px;
  width: 100%;
  border: 1px solid #7b8794;
  border-radius: 3px;
  margin-bottom: 20px;
`
export const RegisterButton = styled.button`
  background-color: #2563eb;
  height: 35px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto';
  width: 120px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
`
export default RegisterContainer
