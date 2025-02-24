import WithoutFooterLayout from '../components/Layout/WithoutFooterLayout'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <WithoutFooterLayout>
      <ContactCard />
      <ContactForm />
    </WithoutFooterLayout>
  )
}

export default Contact