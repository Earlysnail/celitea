import { Component } from 'react'
import { style } from '../../components/styles'
import HeaderBar from '../../components/HeaderBar'
import Head from './head'
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
        <Head/>
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