import * as ActionCable from '@rails/actioncable'
import {
  WEB_SOCKETS_URL,
  WEB_SOCKETS_CHANNEL,
  CARGO_CARRIER_NAME
} from '../constants'

ActionCable.logger.enabled = true

export const socketParams = {
  channel: WEB_SOCKETS_CHANNEL,
  cargoCarrierName: CARGO_CARRIER_NAME
}

export const socketSubscription = () => {
  return createConsumer(WEB_SOCKETS_URL)

  // return consumer.subscriptions.create(socketParams, {
  //   connected() {
  //     console.log('connected')
  //     this.cargo()
  //   },
  //   received(data) {
  //     console.log(data)
  //   },
  //   cargo() {
  //     this.perform('cargo', { data: 'new' })
  //   }
  // })
}

// export default createConsumer
