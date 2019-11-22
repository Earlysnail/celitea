
import React, { Component } from 'react'
import { Radio, DatePicker } from 'antd'

class AddMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: '',
      sex: 1,
      birthDate: '',
      graduateGrade: '',
      profession: '',
      email: '',
      phone: '',
      wechat: '',
      qq: '',
      blogAddress: '',
      currentAddress: '',
      githubAddress: '',
      hometown: '',
      companyAddress: '',
    }
  }
  render() {
    const { id, name, sex, birthDate, graduateGrade, profession, email, phone, wechat, qq, blogAddress, currentAddress, githubAddress, hometown, companyAddress } = this.state
    return (
      <div className='addMember'>
        <div className="fromWrap">
          {/* <p>姓名*，性别*，出生年月*，哪级*，专业*，加入社团时间（18级及以后必填），在社团那个兴趣组，邮箱*，手机号*，微信*，QQ，博客地址，现居住地（城市即可）*，公司，github，老家是哪的（非籍贯）*</p> */}
          <ul className="form">
            <li>
              <lable>姓名：</lable>
              <input
                type='text'
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              ></input>
              <lable>性别：</lable>
              <Radio.Group value={this.state.sex}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            </li>
            <li>
              <lable>邮箱：</lable>
              <input
                type='text'
                value={email}
                onChange={e => this.setState({ email: e.target.value })}>
              </input>
              <lable>QQ：</lable>
              <input
                type='text'
                value={qq}
                onChange={e => this.setState({ qq: e.target.value })}
              ></input>
            </li>
            <li>
              <label>学号：</label>
              <input
                type='number'
                value={id}
                onChange={e => this.setState({ id: e.target.value })}
              ></input>
              <lable>手机号：</lable>
              <input
                type='text'
                value={phone}
                onChange={e => this.setState({ phone: e.target.value })}
              ></input>
            </li>
            <li>
              <lable>微信：</lable>
              <input
                type='text'
                value={wechat}
                onChange={e => this.setState({ wechat: e.target.value })}
              ></input>
              <lable>github：</lable>
              <input
                type='text'
                value={githubAddress}
                onChange={e => this.setState({ githubAddress: e.target.value })}
              ></input>
            </li>
            <li>
              <lable>专业：</lable>
              <input
                type='text'
                value={profession}
                onChange={e => this.setState({ profession: e.target.value })}
              ></input>

              <lable>博客地址：</lable>
              <input
                type='text'
                value={blogAddress}
                onChange={e => this.setState({ blogAddress: e.target.value })}
              ></input>
            </li>
            <li>
              <lable>年级：</lable>
              <input
                type='text'
                value={graduateGrade}
                onChange={e => this.setState({ graduateGrade: e.target.value })}
              ></input>

              <span>出生日期：</span>
              <DatePicker />
            </li>
            <li>
              <lable>公司：</lable>
              <input
                type='text'
                value={companyAddress}
                onChange={e => this.setState({ companyAddress: e.target.value })}
              ></input>
              <span>参加社团日期：</span>
              <DatePicker />
            </li>
          </ul>
        </div>
        <style jsx>{`
        .addMember{
        }
        .fromWrap{
          margin: 4rem auto;
          display: flex;
          justify-content: center;
        }
        .form{
          display: flex;
          flex-direction:column;
          justify-content: center;
          padding:1rem;
        }
        .form li{
          margin: 1rem;
        }
        .form li input{
          margin-right: 5rem;
        }
        .form li lable{
          margin-right: 1rem;
        }
				`}</style>
      </div >
    )
  }
}

export default AddMember

