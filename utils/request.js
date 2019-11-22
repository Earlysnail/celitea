import axios from 'axios'
import Router from 'next/router'


export default async function request(url, options) {
  const data = axios(url, options)
  return data
}