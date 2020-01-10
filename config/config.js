const WORK_SPACE = {
  NAME: 'celitea'
}

const isMocks = true

const PORT = 9000

const MENU = [
  {
    title: '首页',
    url: '/',
    childrenMenu: []
  }, {
    title: '分享',
    url: '/link',
    childrenMenu: []
  }, {
    title: '成员',
    url: '/data',
    childrenMenu: [
      {
        title: 'addMember',
        url: '/data/addMember'
      }
    ]
  }, {
    title: '登录',
    url: '/login',
    childrenMenu: []
  }
]


export {
  WORK_SPACE,
  MENU,
  PORT,
  isMocks
}