import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function (Component) {
  class Auth extends React.Component {
    static async getInititalProps(ctx) {
    }
    constructor(props) {
      super(props)
      this.state = {}
    }
    async UNSAFE_componentWillMount() {
      const url = window.document.location.pathname;
      const win = window;
      this.setState({
        url,
        win
      })
    }
    render() {
      return (
        <Provider store={store}>
          <Component {...this.state} />
        </Provider>
      )
    }
  }
  return Auth
}

