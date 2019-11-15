import { Component } from 'react'
import {connect } from 'react-redux'

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>Welcome to next.js!</div>
    )
  }
}


const mapStateToProps = ((state) => {
  console.log('state', state)
  return {
  }
})
const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)