import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const WorkPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Work!
      </h1>
    </Layout>
  )
}

export default WorkPage

export const Head: HeadFC = () => <title>Works</title>
