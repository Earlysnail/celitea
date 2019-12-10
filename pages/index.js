import withData from '../config/withData'
import { Layout } from '../modules/common'
import Home from '../modules/home'
import Head from 'next/head';
export default withData((props) => {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href='../../static/antd.css' />
      </Head>
      <Layout  {...props}>
        <Home {...props} />
      </Layout>
    </div>
  )
})