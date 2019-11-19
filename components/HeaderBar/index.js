import { Component } from 'react'
import theme from '../theme'
import Router from 'next/router'
import { MENU } from '../../config'
class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('props', this.props)
    const logo = this.props.logo || '../../static/celitea.jpg';
    const curUrl = this.props.url;
    const curUrlKeywords = curUrl && curUrl.split('/') || [];
    const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
    return (
      <div className="headerBar">
        <section className="nav">
          <ul className="nav_left">
            <li>
              <img src={logo} ></img>
            </li>
          </ul>
          <ul className="nav_right">
            {
              MENU.map((item, iKey) => {
                const itemUrlKeywords = item.url && item.url.split('/') || [];
                const itemUrlKeyword = itemUrlKeywords.length > 1 ? itemUrlKeywords[1] : '/'
                return (
                  <li
                    className={itemUrlKeyword == curUrlKeyword ? 'curLi' : ''}
                    onClick={() => { Router.push(item.url) }}
                    key={iKey}>
                    {item.title}
                  </li>
                )
              })
            }
          </ul>
        </section>
        <style>{`
        .headerBar{
          width: 100%;
          font-size: 1rem;
          z-index: 900;
        }
        .nav{
          height: 3.4rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          padding: 1% 0;
        }
        .nav_right{
          width: 30%;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
        }
        .nav_right li.curLi{
          color: #09F7F7;
        }
        .nav_right li{
          font-size: 1rem;
          line-height: 3.4rem;
          cursor: pointer;
        }
        .nav_right li:hover{
          color: #09F7F7;
        }
        .nav_left {
          width: 20%;
          display:flex;
          justify-content: flex-start;
          flex-wrap: nowrap;
          line-height: 3.4rem;
        }
        .nav_left li{
          line-height: 3.4rem;
        }
        .nav_left img{
          height: 3.4rem;
          border-radius: 50%;
        }
        `}</style>
      </div>
    )
  }
}

export default HeaderBar