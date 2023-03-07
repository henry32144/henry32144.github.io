import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        About!
      </h1>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>
