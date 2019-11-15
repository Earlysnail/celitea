import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function(Component){
  class Auth extends React.Component {
    constructor(props){ 
      super(props)

    }
    async componentDidMount(){
      const url = window.document.location.pathname;
      const win = window;
      this.setState({url, win})
    }
    render(){
      return (
        <Provider store={store}>
          <Component {...this.state}/>
       </Provider>
      )
    }
  }
  return Auth
}

