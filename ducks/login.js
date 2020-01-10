import { doLogin } from '../api/index'

//type
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

const initState = {
  user:{}
}

//reducer
export function admin(state = initState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST: return Object.assign({}, state, { loading: true, error: null })
    case LOGIN_SUCCESS: return Object.assign(
      {},
      state,
      Object.assign({}, state.user, { username: action.data.username, password: action.data.password }),
      { loading: false, error: null }
    )
    case LOGIN_FAIL: return Object.assign({}, state, { loading: false, error: action.error })
    default: return state
  }
}


export const login = (username, password) => async (dispatch) => {
  const params = {
    username,
    password
  }
  dispatch({ type: LOGIN_REQUEST })
  const res = doLogin(url, params)
  if (res.code === 1) {
    dispatch({
      type: LOGIN_FAIL,
      payload: res.error
    })
  }
  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  })
  localStorage.setItem('token', res.token)
  return res
}



