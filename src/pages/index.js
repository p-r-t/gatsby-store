import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Skus from '../components/Products/Skus'

const IndexPage = () => (
  <Layout>
    <SEO title="Shop" keywords={[`shop`, `store`, `david boland`, `e-commerce`, `swag`]} />
    <h1>Our Swag</h1>
    <p>
      
    </p>
    <Skus />
  </Layout>
)

export default IndexPage
