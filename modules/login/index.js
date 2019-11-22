import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { login } from '../../ducks'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount() {

  }
  async submit() {
    const username = this.state.username;
    const password = this.state.password;
    const data = await this.props.login({ username, password })
    if (data.code == 1) {
      console.log(data.message)
      return
    }
    Router.push('/link')
  }
  render() {
    return (
      <div className='login'>
        <div className='container'>
          <h3>登录</h3>
          <section>
            <dl>
              <dt><span>用户名：</span><input type='text' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}></input></dt>
            </dl>
            <dl>
              <dt><span>密&nbsp;&nbsp;&nbsp;码：</span><input type='password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} ></input></dt>
            </dl>
            <dl>
              <dt><button className="btn" onClick={() => this.submit()}>确定</button></dt>
            </dl>
          </section>
        </div>
        <style global jsx>{`
                .login {
                    display: flex;
                    justify-content: center;
                }
                .login .container {
                    height: 18rem;
                    width: 20rem;
                    padding: 2.5rem 1.2rem;
                    background: #FFF;
                    border-radius: 4px;
                    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, .05);
                    text-align: center;
                }
                .login dt .btn{
                  margin: 0;
                  padding: 0;
                  text-align: center;
                  cursor: pointer;
                  width: 12rem;
                  height: 2rem;
                  line-height: 2rem;
                  border-radius: 2rem;
                  background-color: #33CC8F;
                  color: #FFF;
                  font-size: 1rem;
                }
                .login section{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .login section dl{
                    padding: 1.2rem 0;
                }
                `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = ((state) => {
  return {
  }
})
const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
