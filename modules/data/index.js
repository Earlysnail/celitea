
import React, { Component } from 'react'
import { Timeline } from 'antd'
const img1 = "../../static/1.jpg";
const img2 = "../../static/2.jpg";
const img3 = "../../static/3.jpg";
const img4 = "../../static/4.jpg";

class Data extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const array = [
      {
        name: '马文涛',
        img: img1,
        desc: '前端工程师'
      }, {
        name: '张璞',
        img: img2,
        desc: '软件工程师'
      }, {
        name: '孙立伟',
        img: img3,
        desc: '安卓工程师'
      }, {
        name: '陈少波',
        img: img4,
        desc: '软件工程师'
      }
    ]
    var list = [
      {
        year: '2018',
        desc: '18届毕业生',
        members: array,
        color: '#3564f3',
        mark: false
      }, {
        year: '2019',
        desc: '19届毕业生',
        members: array,
        color: '#345344',
        mark: false
      }, {
        year: '2020',
        desc: '20届毕业生',
        members: array,
        color: '#634343',
        mark: false
      },
    ]
    return (
      <div className='data'>
        <div className="operateLine">
          <span>按热度排序</span>
          <span>按时间排序</span>
          <span className="btn">上传资源</span>
        </div>
        <div>
          <Timeline>
            <Timeline.Item color="green">
              <p style={{ paddingLeft: '2rem' }}>2019</p>
              <div className="menber">
                {
                  array.map((item) => {
                    return (
                      <div id="wrap">
                        <div className="head">
                          <div className="img">
                            <img src={item.img}></img>
                          </div>
                          <h3>{item.name}</h3>
                        </div>
                        <div className="desc">{item.desc}</div>
                      </div>)
                  })
                }
              </div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <p style={{ paddingLeft: '2rem' }}>2019</p>
              <div className="menber">
                {
                  array.map((item) => {
                    return (
                      <div id="wrap">
                        <div className="head">
                          <div className="img">
                            <img src={item.img}></img>
                          </div>
                          <h3>{item.name}</h3>
                        </div>
                        <div className="desc">{item.desc}</div>
                      </div>)
                  })
                }
              </div>
            </Timeline.Item>
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
            justify-content: left;
          }
          .menber #wrap{
              width: 14rem;
              margin: 3rem 1rem;
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
          .menber .img{
              width: 6rem;
              height:6rem;
              border-radius: 50%;
              overflow: hidden;
              display: inline-block;
          }
          .menber .desc{
              background-color: #fff;
              color: #919191;
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

export default Data





