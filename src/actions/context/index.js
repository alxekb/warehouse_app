import { createConsumer, ActionCable } from '@rails/actioncable'
import {
  WEB_SOCKETS_URL,
  WEB_SOCKETS_CHANNEL,
  CARGO_CARRIER_NAME
} from '../constants'
import { createAction } from '../../utils/redux'

ActionCable.logger.enabled = true

import {
  CONTEXT_FETCH_START,
  CONTEXT_FETCH_SUCCESS,
  CONTEXT_FETCH_FAILURE
} from "./types";


const contextFetchStart = () => createAction(CONTEXT_FETCH_START)
const contextFetchSuccess = () => createAction(CONTEXT_FETCH_SUCCESS, { connected: true })
const contextFetchFailure = () => createAction(CONTEXT_FETCH_FAILURE)

const channelParams = {
  channel: WEB_SOCKETS_CHANNEL,
  cargoCarrierName: CARGO_CARRIER_NAME
}

export default () => (
  (dispatch) => {
    dispatch(contextFetchStart())
    const consumer = createConsumer(WEB_SOCKETS_URL)
    consumer.subscriptions.create(channelParams, {
      connected: () => dispatch(contextFetchSuccess()),
      cargo: (data) => dispatch(contextFetchSuccess(data)),
      disconnected: () => dispatch(contextFetchFailure()),
    })
  }
)
