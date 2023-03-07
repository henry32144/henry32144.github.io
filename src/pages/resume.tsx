import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Resume!
      </h1>
    </Layout>
  )
}

export default ResumePage

export const Head: HeadFC = () => <title>Resume</title>
