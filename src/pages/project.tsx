import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Project!
      </h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Project</title>
