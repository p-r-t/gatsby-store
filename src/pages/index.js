import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Skus from '../components/Products/Skus'
import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Shop" keywords={[`shop`, `store`, `david boland`, `e-commerce`]} />
    <h1>Shop</h1>
    <p>
      
    </p>
    <Skus />
  </Layout>
)

export default IndexPage
