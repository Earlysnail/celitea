import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { login } from '../../ducks'
import { Input, Icon, Tooltip, Button } from 'antd'

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
    const { username, password } = this.state
    return (
      <div className='login'>
        <div className='container'>
          <h3>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</h3>
          <section>
            <dl>
              <dt>
                <label>用户名：</label>
                <Input
                  placeholder="请输入用户名"
                  type='text'
                  value={username}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ username: e.target.value })}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </dl>
            <dl>
              <dt>
                <label>密&nbsp;&nbsp;&nbsp;码:</label>
                <Input
                  placeholder="请输入密码"
                  type='password'
                  value={password}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ password: e.target.value })}
                  prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </dl>
            <dl>
              <dt>
                <Button type="primary" onClick={this.submit} style={{ width: '17rem', backgroundColor: '#33CC8F', borderRadius: '10px' }}>确定</Button>
              </dt>
            </dl>
          </section>
        </div>
        <style global jsx>{`
        @media screen and (min-width: 1024px){
          .login {
              display: flex;
              justify-content: center;
              padding-top: 10rem;
          }
          .login .container {
              width: 50%;
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
          .login section dl dt label{
            display: inline-block;
            min-width: 5rem;
          }
        }
        @media screen and (max-width: 1024px){
          .login {
            display: flex;
            justify-content: center;
            padding-top: 5rem;
          }
          .login .container {
              width: 85%;
              padding: 1rem 1rem;
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
              padding: 1rem 0;
          }
          .login section dl dt label{
            display: inline-block;
          }
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
