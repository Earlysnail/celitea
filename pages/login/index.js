import Login from '../../modules/login'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <Login {...props}></Login>
        </Layout>
 
    )
})