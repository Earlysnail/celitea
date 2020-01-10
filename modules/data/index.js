
import React, { Component } from 'react'
import { getMember } from '../../ducks/index'
import { connect } from 'react-redux'
import { Timeline } from 'antd'


class Data extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount(){
    this.props.getMember()
  }
  render() {
    const list = this.props && this.props.member
    console.log('111', list, this.props)
    const num = parseInt(this.props.win && this.props.win.document && this.props.win.document.getElementsByClassName('menber') && this.props.win.document.getElementsByClassName('menber')[0] && this.props.win.document.getElementsByClassName('menber')[0].offsetWidth / 256) * 2
    // const list =  []
    return (
      <div className='data'>
        <div className="operateLine">
          <span>按热度排序</span>
          <span>按时间排序</span>
          {/* <span className="btn">上传资源</span> */}
        </div>
        <div className='memberList'>
          <Timeline>
            {
              list.map((item, ikey) => {
                return (
                  <Timeline.Item color={item.color} key={ikey}>
                    <p style={{ paddingLeft: '2rem' }}>{item.year}-{item.desc}</p>
                    <div className="menber">
                      {
                        item.members.map((ele, index) => {
                          console.log('num',num, index)
                          if ((index < num - 2) || (index < 2)) {
                            return (
                              <div id="wrap" key={index}>
                                <div className="head">
                                  <div className="img">
                                    <img src={ele.img}></img>
                                  </div>
                                  <h3>{ele.name}</h3>
                                </div>
                                <div className="desc">{ele.desc}</div>
                              </div>
                            )
                          }
                        })
                      }
                    </div>
                  </Timeline.Item>
                )
              })
            }
            <Timeline.Item color="green">
              <p style={{ paddingLeft: '2rem' }}>至今。。。</p>
            </Timeline.Item>
          </Timeline>
        </div>
        <style jsx>{`
          .data{
            padding: 0 5%;
          }
          .data .operateLine{
            padding: 1rem;
          }
          .data .operateLine span{
            margin-right: 2rem;
            padding: 1rem;
            height: 3rem;
            line-height: 3rem;
            cursor: pointer;
          }
          .data .operateLine .btn{
            width: 8rem;
            margin: 0;
            padding: 0;
            float: right;
            border-radius: 10px;
            text-align: center;
            background-color: #33CC8F;
            cursor: pointer;
            z-index: 11;
          }
          .data .menber{
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .memberList{
            padding: 2rem;
          }
          .menber #wrap{
              width: 14rem;
              margin: 2rem 1rem;
              background-color: #f5f8fa;
              border-radius: 10px;
              text-align: center;
              transition: all .3s ease;
          }
          .menber #wrap:hover {
              transform: translateY(-6px);
              -webkit-transform: translateY(-6px);
              -moz-transform: translateY(-6px);
              box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
              -webkit-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
              -moz-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3)
          }
          .menber .head{
              padding: .2rem .1rem;
          }
          .menber img{
              width: 5.5rem;
              height:5.5rem;
              padding: .5rem;
              border-radius: 50%;
              overflow: hidden;
              display: inline-block;

          }
          .menber .desc{
              color: #919191;
              background-color: #f5f8fa;
              line-height: 60px;
              height: 60px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 20px;
          }
				`}</style>
      </div>
    )
  }
}


const mapStateToProps = ((state) => {
  console.log('state', state)
  return {
    member: state.member.member
  }
})
const mapDispatchToProps = {
  getMember
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)



