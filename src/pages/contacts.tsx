import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Contacts!
      </h1>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contacts</title>
