import request from '../utils/request'
import { isMocks } from '../config/index'
const img1 = "../static/1ys.jpg";
const img2 = "../static/2ys.jpg";
const img3 = "../static/5ys.jpg";
const img4 = "../static/4ys.jpg";
const isMock = true
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
  }, {
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
  }, {
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
const list = [
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
export const getMemberList = (params) => {
  console.log('getMemberList')
  const url = ''
  const options = {
    data: params,
    method:'POST',
  }
  const mock = {
    code: 0,
    data: list
  }
  const ismoke = true
  return (isMocks || isMock || ismoke) ? mock : request(url, options)
}