import NextHead from 'next/head'

const defaultDescription = ''

export const Head = (props) => (
  <NextHead>
    <meta content='text/html;charset=utf-8' />
    <title>计算机精英协会</title>
    <meta name='description' content={props.description || defaultDescription} />
    {/* <link rel='icon' href='/static/favicon.ico' /> */}
    <link rel='stylesheet' href='/static/antd.css' />
  </NextHead>
)

export default Head
