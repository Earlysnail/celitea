import AddMember from '../../../modules/data/addMember'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
export default withData((props) => {
    return (
        <div>
            <Layout {...props}>
                <AddMember {...props}></AddMember>
            </Layout>
        </div>
    )
})