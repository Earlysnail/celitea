
import React, { Component } from 'react'
import { Radio, DatePicker, Button, Input, Icon, Tooltip } from 'antd'
import moment from 'moment';
import { getKeyFromChildrenIndex } from 'rc-menu/lib/util'

class AddMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: '',
      sex: 1,
      number: '',
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
  submit = () => {
    const { id, name, sex, birthDate, graduateGrade, profession, email, phone, number, wechat, qq, blogAddress, currentAddress, githubAddress, hometown, companyAddress } = this.state
    console.log('表单：', {
      id,
      name,
      sex,
      number,
      birthDate: moment(),
      graduateGrade,
      profession,
      email,
      phone,
      wechat,
      qq,
      blogAddress,
      currentAddress,
      githubAddress,
      hometown,
      companyAddress
    })
  }

  render() {
    const { id, name, sex, birthDate, graduateGrade, profession, email, phone, wechat, qq, blogAddress, currentAddress, githubAddress, hometown, companyAddress } = this.state
    console.log(moment(birthDate).format("YYYY-MM-DD"))
    return (
      <div className='addMember'>
        <div className="fromWrap">
          {/* <p>姓名*，性别*，出生年月*，哪级*，专业*，加入社团时间（18级及以后必填），在社团那个兴趣组，邮箱*，手机号*，微信*，QQ，博客地址，现居住地（城市即可）*，公司，github，老家是哪的（非籍贯）*</p> */}
          <ul>
            <li>
              <dt>
                <lable>姓名：</lable>
                <Input
                  placeholder="请输入姓名"
                  type='text'
                  value={name}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ name: e.target.value })}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>性别：</lable>
                <Radio.Group
                  value={this.state.sex}
                  onChange={(e) => this.setState({ sex: e.target.value })}>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>
              </dt>
            </li>
            <li>
              <dt>
                <lable>邮箱：</lable>
                <Input
                  placeholder="请输入邮箱"
                  type='text'
                  value={email}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ email: e.target.value })}
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>QQ：</lable>
                <Input
                  placeholder="请输入QQ"
                  type='text'
                  value={qq}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ qq: e.target.value })}
                  prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </li>
            <li>
              <dt>
                <lable>学号：</lable>
                <Input
                  placeholder="请输入学号"
                  type='text'
                  value={id}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ id: e.target.value })}
                  prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>手机号：</lable>
                <Input
                  placeholder="请输入手机"
                  type='text'
                  value={phone}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ phone: e.target.value })}
                  prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </li>
            <li>
              <dt>
                <lable>微信：</lable>
                <Input
                  placeholder="请输入微信"
                  type='text'
                  value={wechat}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ wechat: e.target.value })}
                  prefix={<Icon type="wechat" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>github：</lable>
                <Input
                  placeholder="请输入github"
                  type='text'
                  value={githubAddress}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ githubAddress: e.target.value })}
                  prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </li>
            <li>
              <dt>
                <lable>专业：</lable>
                <Input
                  placeholder="请输入专业"
                  type='text'
                  value={profession}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ profession: e.target.value })}
                  prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>博客地址：</lable>
                <Input
                  placeholder="请输入博客"
                  type='text'
                  value={blogAddress}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ blogAddress: e.target.value })}
                  prefix={<Icon type="folder-open" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
            </li>
            <li>
              <dt>
                <lable>年级：</lable>
                <Input
                  placeholder="请输入年级"
                  type='text'
                  value={graduateGrade}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ graduateGrade: e.target.value })}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>出生日期：</lable>
                <DatePicker
                  onChange={(e) => this.setState({ birthDate: e })}
                />
              </dt>
            </li>

            <li>
              <dt>
                <lable>公司：</lable>
                <Input
                  placeholder="公司"
                  type='text'
                  value={companyAddress}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ companyAddress: e.target.value })}
                  prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt>
                <lable>参加社团日期：</lable>
                <DatePicker />
              </dt>
            </li>
            <li>
              <dt>
                <lable>住址：</lable>
                <Input
                  placeholder="请输入现住址"
                  type='text'
                  value={currentAddress}
                  style={{ width: 200 }}
                  onChange={e => this.setState({ currentAddress: e.target.value })}
                  prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
              </dt>
              <dt></dt>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" onClick={this.submit} style={{width: '10rem'}}>提交</Button>
        </div>
        <style jsx>{`
        @media screen and (min-width: 1024px){
          .addMember{
            margin: 2rem auto;
          }
          .fromWrap{
            margin: 4rem auto 1rem;
            display: flex;
            justify-content: center;
          }
          .fromWrap ul{
            width: 85%;
            display: flex;
            flex-direction:column;
            justify-content: center;
            padding:2rem 5rem;
            box-shadow: 0 10px 20px 0px rgba(0, 0, 0, .05);
          }
          .fromWrap ul li{
            margin: 1rem 0;
            display: flex;
            justify-content: center;
          }
          .fromWrap ul li dt{
            width: 40%;
          }
          .fromWrap ul li dt{
            margin-left: 10%;
          }
          .fromWrap ul li dt lable{
            display: inline-block;
            min-width: 4rem;
          }
        }
        @media screen and (max-width: 1024px){
          .addMember{
            margin: 2rem auto;
          }
          .fromWrap{
            margin: 2rem auto 2rem;
            display: flex;
            justify-content: center;
          }
          .fromWrap ul{
            display: flex;
            flex-direction:column;
            justify-content: center;
            padding:.5rem 1rem;
            box-shadow: 0 10px 20px 0px rgba(0, 0, 0, .05);
          }
          .fromWrap ul li{
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .fromWrap ul li dt {
            margin-top: 1rem;
          }
          .fromWrap ul li dt lable{
            display: inline-block;
            min-width: 4rem;
          }ÎÍ
        }
				`}</style>
      </div >
    )
  }
}

export default AddMember

