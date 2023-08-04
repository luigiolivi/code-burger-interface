import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.png'
import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  SignInLink,
  Error
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="logo-image" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" style={{ marginTop: 45, marginBottom: 15 }}>
            Sign In
          </Button>
        </form>

        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
