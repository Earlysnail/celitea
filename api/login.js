import request from '../utils/request'
import { isMocks } from '../config/index'

const isMock = true

export const doLogin = (params) => {
  const url = ''
  const options = {
    data: params,
    method:'POST',
  }
  const mock = {
    code: 0,
    data: {
      token: '12312312312'
    }
  }
  const ismoke = true
  return (isMocks || isMock || ismoke) ? mock : request(url, options)
}