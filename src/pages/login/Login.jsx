import React from 'react'
import { FormContainer, Header, LoginContainer, StyledForm, StyledImg, StyledInput, StyledButton } from './LoginStyles'
import meal from "../../assets/meal.svg"
const Login = () => {

  const user = {
    username:"user"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem("user",JSON.stringify(user))
    window.location.href = "/home"
  }


  return (
    <div>
      <LoginContainer>
        <FormContainer>
          <StyledImg src={meal} />
          <Header> {"<Clarusway/>"}Recipe </Header>
          <StyledForm onSubmit={handleSubmit}  >
            <StyledInput type="text" placeholder="username" required />
            <StyledInput type="password" placeholder="password" required />
            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  )
}

export default Login
