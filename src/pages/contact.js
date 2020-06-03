import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from '../components/footer'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact</h1>
    <p>I'm Christine!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Footer />
    </div>
    
  </Layout>
)

export default ContactPage