import React from 'react'

import {
  Container,
  Background,
  ContainerItems,
  P,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <Background />
      <ContainerItems>
        <img />
        <h1>Login</h1>

        <P>Email</P>
        <Input />
        <P>Senha</P>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
