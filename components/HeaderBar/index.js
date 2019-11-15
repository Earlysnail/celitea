import { Component } from 'react'
import theme from '../theme'
import { MENU } from '../../config'
class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('props', this.props)
    const curUrl = this.props.url;
    const curUrlKeywords = curUrl && curUrl.split('/') || [];
    const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
    return (
      <div className="headerBar">
        <section className="nav">
          <ul className="nav_left">

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

        }
        `}</style>
      </div>
      )
    }
  }
  
export default HeaderBar