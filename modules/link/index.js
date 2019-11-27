
import React, { Component } from 'react'

const img1 = "../../static/1.jpg";
const img2 = "../../static/2.jpg";
const img3 = "../../static/3.jpg";
const img4 = "../../static/4.jpg";

class Link extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const array = [
      {
        name: 'NeteasySpider',
        img: img1,
        desc: '一个爬取网易云音乐榜单中的爬虫项目,使用Spider爬虫框架+ES搜素+ik分词。'
      }, {
        name: 'TustBox',
        img: img2,
        desc: '虽然佷渺小,但致力于给你最酷的校园lifeStyle。'
      }, {
        name: 'SpringBoot',
        img: img3,
        desc: '写给girlfriend的SpringBoot,在这里疯狂虐狗,巴拉巴拉小魔仙!'
      }, {
        name: 'Celitea',
        img: img4,
        desc: '基于React+redux+saga的社团主页。'
      }
    ]
    return (
      <div className='linkWrap'>
        <div className="operateLine">
          <span>按热度排序</span>
          <span>按时间排序</span>
          <span className="btn">上传资源</span>
        </div>
        <div className="menber">
          {
            array.map((item, index) => {
              return (
                <div id="wrap" key={index}>
                  <div className="head">
                    <img src={item.img}></img>
                    <p className="name">{item.name}</p>
                  </div>
                  <div className="desc">{item.desc}</div>
                  <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>)
            })
          }
        </div>
        <style jsx>{`
          .linkWrap{
            padding: 1% 5%;
          }
          .linkWrap .operateLine span{
            margin-right: 2rem;
            padding: 1rem;
            height: 3rem;
            line-height: 3rem;
            cursor: pointer;
          }
          .linkWrap .operateLine .btn{
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
          .linkWrap .menber{
            display:flex;
            justify-content: space-between;
          }
          .menber #wrap{
              width: 17rem;
              height: 14rem;
              margin: 2rem 1rem;
              padding: 1rem 2rem;
              background-color: #f5f8fa;
              border-radius: 10px;
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
          .menber #wrap div{
            margin-bottom: 1rem;
          }
          .menber .head p{
           
          }
          .menber .head img{
              width: 5rem;
              height:5rem;
              margin-bottom: 1rem;
              border-radius: 5px;
              overflow: hidden;
              display: inline-block;
          }
          .menber .name{

          }
          .menber .desc{
              color: #919191;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
          }
				`}</style>
      </div>
    )
  }
}

export default Link

