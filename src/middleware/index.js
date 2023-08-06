import * as ActionCable from '@rails/actioncable'

import { Socket } from '../utils/socket'
import { socketParams } from '../utils/consumer'

import {
  slotBookingsFetchSuccess,
  slotBookingsFetchStart
} from '../actions/slotBookings'
import {
  SLOT_BOOKING_INITIALIZE,
  SLOT_BOOKING_FETCH_START,
  SLOT_BOOKING_FETCH_SUCCESS,
  SLOT_BOOKING_CREATE
} from '../actions/slotBookings/types'
import { slotBookingsNewEntrySelector } from '../reducers/slotBookings/selectors'

ActionCable.logger.enabled = true

const socket = new Socket()

const socketMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store
  const received = (data) => dispatch(slotBookingsFetchSuccess(data))
  const connected = () => dispatch({ type: 'SLOT_BOOKING_FETCH_START' })
  const disconnected = () => dispatch({ type: 'SLOT_BOOKING_DISCONNECTED' })

  switch (action.type) {
    case SLOT_BOOKING_INITIALIZE:
      if (!socket.consumer.connection.isActive()) {
        socket.connect(socketParams, dispatch, received, connected, disconnected)
      }
      dispatch(slotBookingsFetchStart())
      break
    case SLOT_BOOKING_FETCH_START:
      console.log('start fetching cargo')
      socket.subscriptions.perform('cargo', {})
      break
    case SLOT_BOOKING_FETCH_SUCCESS:
      console.log('middleware success')
      break
    case SLOT_BOOKING_CREATE:
      console.log('create')
      socket.subscriptions.perform('push', slotBookingsNewEntrySelector(store.getState()))
      break
    default:
      return next(action)

  }
}

export default socketMiddleware
