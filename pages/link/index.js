import Link from '../../modules/link'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <Link {...props}></Link>
        </Layout>
 
    )
})