import initialState from './initialState'
import { createReducer } from '../../utils/redux'
import {
  SLOT_BOOKING_INITIALIZE,
  SLOT_BOOKING_RECEIVED,
  SLOT_BOOKING_APPENDED,
  SLOT_BOOKING_TIME_CHANGE,
  SLOT_BOOKING_DATE_CHANGE,
  SLOT_BOOKING_LENGTH_CHANGE,
  SLOT_BOOKING_CARGO_CARRIER_CHANGE,
  SLOT_BOOKING_FETCH_START,
  SLOT_BOOKING_FETCH_SUCCESS,
  SLOT_BOOKING_FETCH_FAILURE
} from '../../actions/slotBookings/types'

export default createReducer(initialState.slotBookings, {
  [SLOT_BOOKING_INITIALIZE]: (state) => ({
    ...state
  }),

  [SLOT_BOOKING_FETCH_START]: (state) => ({
    ...state
  }),

  [SLOT_BOOKING_RECEIVED]: (state, data) => ({
    ...state,
    entries: data.received
  }),

  [SLOT_BOOKING_APPENDED]: (state, data) => ({
    ...state,
    entries: [  ...state.entries, data.append  ]
  }),

  [SLOT_BOOKING_TIME_CHANGE]: (state, data) => ({
    ...state,
    newEntry: {
      ...state.newEntry,
      time: data
    }
  }),

  [SLOT_BOOKING_DATE_CHANGE]: (state, data) => ({
    ...state,
    newEntry: {
      ...state.newEntry,
      date: data
    }
  }),

  [SLOT_BOOKING_LENGTH_CHANGE]: (state, data) => ({
    ...state,
    newEntry: {
      ...state.newEntry,
      length: data
    }
  }),

  [SLOT_BOOKING_CARGO_CARRIER_CHANGE]: (state, data) => ({
    ...state,
    newEntry: {
      ...state.newEntry,
      cargoCarrier: data
    }
  }),

  [SLOT_BOOKING_FETCH_SUCCESS]: (state, data) => ({
    ...state,
    ...data
  }),

  [SLOT_BOOKING_FETCH_FAILURE]: (state) => ({
    ...state
  })
})
