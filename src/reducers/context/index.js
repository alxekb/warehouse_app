import initialState from './initialState'
import { createReducer } from '../../utils/redux'
import {
  CONTEXT_FETCH_START,
  CONTEXT_FETCH_SUCCESS,
  CONTEXT_FETCH_FAILURE
} from '../../actions/context/types'

export default createReducer(initialState, {
  [CONTEXT_FETCH_START]: (state) => ({
    ...state,
    isFetching: true
  }),

  [CONTEXT_FETCH_SUCCESS]: (state) => ({
    ...state,
    isFetching: false
  }),

  [CONTEXT_FETCH_FAILURE]: (state) => ({
    ...state,
    isFetching: false
  }),
})
