import { Component } from 'react'
import { style } from '../../components/styles'
import HeaderBar from '../../components/HeaderBar'
class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <HeaderBar {...this.props} />
        {
          this.props.children
        }
        <style>
          {style()}
        </style>
      </main>
    )
  }
}
export default Layout