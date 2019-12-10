import Login from '../../modules/login'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'
import Head from 'next/head';
export default withData((props) => {
    return (
        <div>
            <Head>
                <link rel='stylesheet' href='../../static/antd.css' />
            </Head>
            <Layout {...props}>
                <Login {...props}></Login>
            </Layout>
        </div>
    )
})