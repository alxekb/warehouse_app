const createReducer = (initialState, handler = {}) => (state = initialState, action) => (
  // eslint-disable-next-line no-prototype-builtins
  handler.hasOwnProperty(action.type) ? handler[action.type](state, action.payload) : state
)

const createAction = (type, payload = {}) => ({ type, payload })

export {
  createReducer,
  createAction
}


