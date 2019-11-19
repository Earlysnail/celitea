import theme from './theme'


export function style() {
  return (
    <style>{`
      body{
        font-family: PingFangSC-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        font-size: ${theme.fontsize};
        background-color: #FFF;
        color: ${theme.fontcolor};
        font-weight: ${theme.fontweight};
        margin: 0;
        padding: 0 5%;
      }
      ol,ul,dl,dd,p,dl,p,h3{
        margin: 0 !important;
      }  
      a {
        text-decoration:none
      }
      li {
        list-style: none
      }
      .flex{
        display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box;     /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox;  /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex;
      }
      .lr-flex{
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
      }
      .tb-flex{
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-justify-content: center;
        align-items: center;
      }
      #__next-prerender-indicator{
        display:none
      }
      `}</style>
  )
}