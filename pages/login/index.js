import Login from '../../modules/login'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'
export default withData((props) => {
    return (
        <div>
            <Layout {...props}>
                <Login {...props}></Login>
            </Layout>
        </div>
    )
})