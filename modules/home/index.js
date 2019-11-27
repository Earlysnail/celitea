import { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

const img1 = '../../static/1.jpg'
const img2 = '../../static/2.jpg'
const img5 = '../../static/5.jpg'
const bgImage = '../../static/bgImage.png'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position1: 0,
      position2: 0
    }
  }
  async componentDidMount() {
    const win = this.props.win
    win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img1, 'position1') })
    win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img2, 'position2') })
  }

  async componentWillUnmount() {
    const win = this.props.win
    win.removeEventListener('scroll', this.parallaxEffect(this.refs.img, 'position1'))
    win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img2, 'position2') })
  } Ï
  parallaxEffect = (dom, pos) => {
    const win = this.props.win
    var domHeight = dom && dom.offsetHeight || 700;     											//dom元素的高度
    var windowHeight = win.innerHeight;  																			//窗口的可见高度
    var domOffsetTop = dom && dom.offsetTop || 900;																					//dom元素距离顶部高度
    var scrollTop = win.document.documentElement.scrollTop;    								//滚动条滚动的高度
    var startScrollTop = scrollTop + windowHeight;														//滚动条滚动的高度 + 窗口的可见高度
    var endScrollTop = scrollTop - domHeight;    														//滚动条滚动的高度 - dom元素的高度
    if ((startScrollTop > domOffsetTop) && (endScrollTop < domOffsetTop)) {		//判断dom元素是否在可视区域
      var visibleScrollValue = startScrollTop - endScrollTop;        					//窗口的可见高度 + dom元素的高度
      var pixelScrolled = scrollTop - (domOffsetTop - windowHeight);    			//滚动条滚动的高度 - 窗口的可见高度
      var percentScrolled = pixelScrolled / visibleScrollValue;
      var deltaTopScrollVal = 0;
      deltaTopScrollVal = percentScrolled * 100;   						 								//向下滚动
      this.setState({
        [pos]: deltaTopScrollVal
      })
    }
  }
  joinClitea = () => {
    console.log('asjnjas')
    Router.push('/data/addMember')
  }
  render() {
    return (
      <div className='home'>
        <div className="oncePage">
          <div className="pageContent">
            <h1 className="mainName">计算机精英协会</h1>
            <p className="scieName">我挥舞着键盘和本子，<br />发誓要把这世界写的明明白白</p>
            <div className="btn">
              <span className="leftBtn" onClick={this.joinClitea}>加入我们</span>
              <span className="rightBtn" >录入信息</span>
            </div>
          </div>
          <div className="bgImage">
            <img src={bgImage}></img>
          </div>
        </div>
        <div className="backgroundImage bg1" ref="img1">
          <div className="shadow"></div>
        </div>
        <div className="header">
          <h1 style={{ height: '20rem', textAlign: 'center' }}>天津科技大学</h1>
        </div>
        <div className="backgroundImage bg2" ref="img2">
          <div className="shadow"></div>
        </div>
        <div className="header">
          <h1 style={{ height: '20rem', textAlign: 'center' }}>计算机精英协会</h1>
        </div>
        {/*  ${(this.props.win && this.props.win.innerHeight || 1000)-300}px; */}
        <style global jsx>{`
              body, h1{
                margin: 0;
                padding: 0;
              }
              .oncePage{
                min-height: 50rem;
                width:100%;
                background-color: #f7f1f1;
              }
              .bgImage{
                position: absolute;
                top:25%;
                right:5%;
                height: 70%;
                width: 45%;
                overflow: hidden;
                z-index: 11;
              }
              .bgImage img{
                width:100%;
              }
              .pageContent{
                width:45%;
                position: absolute;
                top:30%;
                left:5%;
                justify-content: center;
              }
              .pageContent .mainName{
                margin-bottom: 1.5rem;
                font-size: 4rem;
              }
              .pageContent .scieName{
                margin-bottom: .5rem;
                color: #b1acac;
                font-size: 1.5rem;
              }
              .pageContent .btn span{
                display: inline-block;
                height: 3rem;
                line-height: 3rem;
                width: 10rem;
                margin: 2rem 2rem 2rem 0;
                border-radius: 50px;
                text-align: center;
                cursor: pointer;
                z-index: 11;
              }
              .pageContent  .leftBtn{
                background-color: #2ea2a2;
                color: #FFF;
              }
              .pageContent  .rightBtn{
                border: .1rem solid #2ea2a2;
              }
              @media screen and (max-width: 1024px){
                .pageContent{
                  width:90%;
                  text-align:center;
                }
                .pageContent .mainName{
                  font-size: 2.5rem;
                }
                .pageContent .scieName{
                  font-size: 1rem;
                }
                .pageContent .btn span{
                  display: block;
                  margin: 1rem auto;
                }
                .bgImage{
                  width:90%;
                  top: 80%;
                }
              }
              .backgroundImage {
                box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
                -webkit-box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
                -moz-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
                -o-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
                -ms-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
                background-attachment: fixed;
              }
              .backgroundImage .shadow {
                width:100%;
                overflow:hidden;
                margin:auto;
                height: 500px;
              }
              .bg1{
                background: url(${img5}) center center no-repeat;
                background-position:50% ${this.state.position1}%;
              }
              .bg2{
                background: url(${img5}) center center no-repeat;
                background-position:50% ${this.state.position2}%;
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

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)