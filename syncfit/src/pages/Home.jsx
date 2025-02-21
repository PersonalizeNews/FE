import React from 'react'
import Hero from '../components/Hero'
import WithoutFooterLayout from '../components/Layout/WithoutFooterLayout'

const Home = () => {
  return (
    <WithoutFooterLayout>
      <Hero />
    </WithoutFooterLayout>
  )
}

export default Home