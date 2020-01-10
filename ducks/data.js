






import { getMemberList } from '../api/index'

//type
const GET_MEMBER_REQUEST = 'LOGINGET_MEMBER_REQUEST_REQUEST'
const GET_MEMBER_SUCCESS = 'GET_MEMBER_SUCCESS'
const GET_MEMBER_FAIL = 'GET_MEMBER_FAIL'

const initState = {
  member: []
}

//reducer
export function member(state = initState, action = {}) {
  console.log('data')
  switch (action.type) {
    case GET_MEMBER_REQUEST: return Object.assign({}, state, { loading: true, error: null })
    case GET_MEMBER_SUCCESS: return Object.assign(
      {},
      state,
      Object.assign({}, state.member, { member: action.payload }),
      { loading: false, error: null }
    )
    case GET_MEMBER_FAIL: return Object.assign({}, state, { loading: false, error: action.error })
    default: return state
  }
}


export const getMember = (keyword) => async (dispatch) => {
  console.log('getMember')
  const params = keyword
  dispatch({ type: GET_MEMBER_REQUEST })
  const res = getMemberList(params)
  if (res.code === 1) {
    dispatch({
      type: GET_MEMBER_FAIL,
      payload: res.error
    })
  }
  dispatch({
    type: GET_MEMBER_SUCCESS,
    payload: res.data
  })
  return res
}



