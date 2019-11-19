import withData from '../config/withData'
import { Layout } from '../modules/common'
import Home from '../modules/home'
export default withData((props) => {
  return (
    <Layout  {...props}>
      <Home {...props} />
    </Layout>
  )
})