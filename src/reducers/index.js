import { combineReducers } from 'redux'

import context from './context'
import slotBookings from './slotBookings'

export default combineReducers({
  context,
  slotBookings
})
