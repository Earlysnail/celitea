import Data from '../../modules/data'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'
export default withData((props) => {
    return (
        <div>
            <Layout {...props}>
                <Data {...props}></Data>
            </Layout>
        </div>
    )
})