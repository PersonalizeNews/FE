import Hero from '../components/Hero'
import IntroOne from '../components/IntroOne'
import IntroTwo from '../components/IntroTwo'
import WithoutFooterLayout from '../components/Layout/WithoutFooterLayout'

const Home = () => {
  return (
    <WithoutFooterLayout>
      <Hero />
      <IntroOne />
      <IntroTwo />
    </WithoutFooterLayout>
  )
}

export default Home