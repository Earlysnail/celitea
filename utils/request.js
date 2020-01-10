import axios from 'axios'



export default async function request(url, options) {
  const data = axios(url, options)
  return data
}