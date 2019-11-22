import { Component } from 'react'
import { style } from '../../components/styles'
import HeaderBar from '../../components/HeaderBar'
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {

		}
  }
  async componentWillMount() {
	}
	async componentDidMount() {
	}
  render() {
    return (
      <main>
        <HeaderBar { ...this.props }></HeaderBar>
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