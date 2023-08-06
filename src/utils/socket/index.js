import { createConsumer } from '@rails/actioncable'
import { WEB_SOCKETS_URL } from '../../constants'
import {
  slotBookingsFetchStart,
  slotBookingsReceived,
  slotBookingsAppended
} from '../../actions/slotBookings'

class Socket {
  constructor() {
    this.consumer = createConsumer(WEB_SOCKETS_URL)
  }

  connect(socketParams, dispatch) {
    this.dispatch = dispatch

    this.subscriptions = this.consumer.subscriptions.create(socketParams, {
      connected() {
        dispatch(slotBookingsFetchStart())
      },
      received(data) {
        switch (data.type) {
          case 'append':
            dispatch(slotBookingsAppended({ append: data.attributes }))
            break
          default:
            dispatch(slotBookingsReceived({ received: data }))
        }
      },
      disconnected() {
      },
      cargo() {
        this.perform('cargo')
      }
    })
  }
}

export { Socket }
