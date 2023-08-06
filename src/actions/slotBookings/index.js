import {
  SLOT_BOOKING_INITIALIZE,
  SLOT_BOOKING_RECEIVED,
  SLOT_BOOKING_APPENDED,
  SLOT_BOOKING_TIME_CHANGE,
  SLOT_BOOKING_DATE_CHANGE,
  SLOT_BOOKING_LENGTH_CHANGE,
  SLOT_BOOKING_CARGO_CARRIER_CHANGE,
  SLOT_BOOKING_CREATE,
  SLOT_BOOKING_FETCH_START,
  SLOT_BOOKING_FETCH_SUCCESS,
  SLOT_BOOKING_FETCH_FAILURE
} from './types'
import { createAction } from '../../utils/redux'

export const slotBookingsInitialize = () => createAction(SLOT_BOOKING_INITIALIZE)
export const slotBookingsReceived = (data) => createAction(SLOT_BOOKING_RECEIVED, data)
export const slotBookingsAppended = (data) => createAction(SLOT_BOOKING_APPENDED, data)
export const slotBookingsTimeChange = (data) => createAction(SLOT_BOOKING_TIME_CHANGE, data)
export const slotBookingsDateChange = (data) => createAction(SLOT_BOOKING_DATE_CHANGE, data)
export const slotBookingsLengthChange = (data) => createAction(SLOT_BOOKING_LENGTH_CHANGE, data)
export const slotBookingsCargoCarrierChange = (data) => createAction(SLOT_BOOKING_CARGO_CARRIER_CHANGE, data)
export const slotBookingsCreate = (data) => createAction(SLOT_BOOKING_CREATE, data)
export const slotBookingsFetchStart = () => createAction(SLOT_BOOKING_FETCH_START)
export const slotBookingsFetchSuccess = (data) => createAction(SLOT_BOOKING_FETCH_SUCCESS, data)
export const slotBookingsFetchFailure = () => createAction(SLOT_BOOKING_FETCH_FAILURE)
