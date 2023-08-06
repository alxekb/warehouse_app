import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  slotBookingsInitialize,
  slotBookingsTimeChange,
  slotBookingsDateChange,
  slotBookingsLengthChange,
  slotBookingsCargoCarrierChange,
  slotBookingsCreate
} from '../../../actions/slotBookings'

const renderTimeSlots = (props) => {
  const { slotBookings } = props
  const slots = Object.entries(slotBookings.entries)

  return (
    <div className="card card-body">
      <h2>time slots ({ slots.length })</h2>
      {slots.map((entry) => {
        const [_, booking] = entry

        return (
          <div
            key={ `${booking.id}${booking.createdAt}` }
            className='card card-body mb-2'
          >

            <div>
              <p>{new Date(booking.started_at).toDateString()}</p>
              <small>
                {booking.cargo_carrier_name}[{booking.id}]
              </small>
            </div>

            <strong>
              start: {
                new Date(booking.started_at).toLocaleTimeString()
              } end: {
                new Date(booking.ended_at).toLocaleTimeString()
              }
            </strong>

          </div>
        )
      }
      )}
    </div>
  )
}

function WarehousePage(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(slotBookingsInitialize())
  }, [dispatch])

  const handleTimeChange = (e) => {
    dispatch(slotBookingsTimeChange(e.target.value))
  }

  const handleDateChange = (e) => {
    dispatch(slotBookingsDateChange(e.target.value))
  }

  const handleLengthChange = (e) => {
    dispatch(slotBookingsLengthChange(e.target.value))
  }

  const handleCarrierChange = (e) => {
    dispatch(slotBookingsCargoCarrierChange(e.target.value))
  }

  return (
    <div className="card">
      <div className="card card-header">

        <div>
          <label htmlFor="timeInput">Select a time:</label>
          <input
            type="time"
            id="timeInput"
            value={ props.slotBookings.newEntry.time }
            onChange={ handleTimeChange }
          />
          <p>Selected Time: </p>
        </div>

        <div>
          <label htmlFor="dateInput">Select a date:</label>
          <input
            type="date"
            id="dateInput"
            value={ props.slotBookings.newEntry.date }
            onChange={ handleDateChange }
          />
          <p>Selected Date: {props.slotBookings.newEntry.date}</p>
        </div>

        <div>
          <label htmlFor="lengthInput">Select length in minutes:</label>
          <input
            type="number"
            id="lengthInput"
            value={ props.slotBookings.newEntry.length }
            onChange={ handleLengthChange }
          />
          <p>Selected Length: {props.slotBookings.newEntry.length}</p>
        </div>

        <div>
          <label htmlFor="carrierInput">Select a carrier:</label>
          <input
            type="text"
            id="carrierInput"
            value={ props.slotBookings.newEntry.cargoCarrier }
            onChange={ handleCarrierChange }
          />
          <p>Selected Carrier: {props.slotBookings.newEntry.cargoCarrier}</p>

        </div>


        <span>
          <button
            className="btn btn-primary"
            onClick={ () => dispatch(slotBookingsCreate()) }
          >
            <h2>add Time Slot</h2>
          </button>
        </span>

      </div>
      { renderTimeSlots(props) }
    </div>
  )
}

const mapStateToProps = (state) => ({
  slotBookings: state.slotBookings
})

export default connect(mapStateToProps)(WarehousePage)

export { WarehousePage }
