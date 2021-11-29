import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './404.scss';

const NotFound = () => (
  <Layout>
    <Seo refresh={true} />
    <div className="gen-wrap not-found-wrap">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  </Layout>
)

export default NotFound