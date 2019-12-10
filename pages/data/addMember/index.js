import AddMember from '../../../modules/data/addMember'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import Head from 'next/head';
export default withData((props) => {
    return (
        <div>
            <Head>
                <link rel='stylesheet' href='../../static/antd.css' />
            </Head>
            <Layout {...props}>
                <AddMember {...props}></AddMember>
            </Layout>
        </div>
    )
})