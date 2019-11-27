import { Component } from 'react'
import theme from '../theme'
import Router from 'next/router'
import { MENU } from '../../config'
class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const logo = this.props.logo || '../../static/celitea.jpg';
    const curUrl = this.props.url;
    const curUrlKeywords = curUrl && curUrl.split('/') || [];
    const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
    //  console.log('curUrl', this.props.url)
    // console.log('curUrlKeywords', curUrlKeywords)
    // console.log('curUrlKeyword', curUrlKeyword)

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
                //  console.log('item', item.url)
                // console.log('itemUrlKeywords', itemUrlKeywords)
                // console.log('itemUrlKeyword', itemUrlKeyword)
                return (
                  <li
                    className={itemUrlKeyword == curUrlKeyword ? 'curLi' : ''}
                    onClick={() => {
                      console.log('item', item.url)
                      Router.push(item.url)
                    }
                    }
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
          font-size: 1rem;
          z-index: 900;
          background-color: #f7f1f1;
          padding: 1% 5%;
        }
        .nav{
          height: 3.4rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
        }
        .nav_right{
          width: 30%;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
        }
        @media screen and (max-width: 1024px){
          .nav_right{
            width:60%;
          }
        }
        .nav_right li.curLi{
          color: #2ea2a2;
        }
        .nav_right li{
          font-size: 1rem;
          line-height: 3.4rem;
          cursor: pointer;
        }
        .nav_right li:hover{
          color: #2ea2a2;
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