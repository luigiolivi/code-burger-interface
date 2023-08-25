import React from 'react'

import HomeImage from '../../assets/home-image.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeImage} alt="logo-image" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
