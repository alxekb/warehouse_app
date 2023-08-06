## Slot Booking

Slot booking

Suppose you build logistics management software. Your current task is to implement a system through which shipping companies can book a time slot to load or unload goods at a warehouse. Specifically, given a day and the duration for the new slot to be booked, you need system suggesting a list of times that are available for booking. Users can then pick one suggestion from the list and book a slot at this time.

Task summary

Create a simple web application using Ruby on Rails and React.

Users of this application shall be able to enter their slot booking details:

The day on which the slot should be booked

The duration of the slot to book

In response to these inputs, the application shall display a list of possible times on this day when such a slot can be booked. Slot booking shall be aligned to 15-minute increments - therefore there should be a multiple of 15 minutes between each slot that is offered.

The user shall be able to pick one of these possible time slots. That should then book this slot for the user and display some form of confirmation that the operation was successful.

Users of the app shall not be able to book a slot that overlaps any previously-booked slot.

Use the JSON dump below as the initial set of booked slots. These are all slots that other people have booked already and are thus not available for booking.

The requirements presented here are intentionally imprecise. Think about the problem, ask questions, and make assumptions.

Evaluation criteria

These are the criteria we use to judge the quality of your solution.

The application behaves correctly (as specified above)

The application shall be easy to use for end-users

The application shall be easy to install & run in development mode. Prefer an embedded database (if you need a DB) & provide instructions on how to run your application.

Deliver production-quality code

Extra points

These things are not required, but they will please us. Don't feel pressured to complete them.

Write automated tests for your application

Make the application's frontend look nice

The algorithm at the core of the application has more edge cases than you might think initially. Make sure the application behaves correctly for all inputs. Make the application usable for multiple users simultaneously. In particular, when user A books a slot, this slot shall disappear from the list of suggested slots on user B's screen. (Hint: WebSockets)

Further hints

It's not necessary to create an authentication or authorization system. Users can just be anonymous.

Example use case

The cargo carrier company "Transport Inc." wants to book a slot at their client's warehouse. They need to deliver the goods on 1st of February 2022. It will take around 30 minutes to unload the truck.

A "Transport Inc." clerk opens their client's slot booking website (this is what you build). They enter the date and the duration (e.g. 2022-02-01 and 30 minutes). Now the system shows them a list of times for which they can book their slot. From this list, the clerk chooses 15:00 (3 p.m.) and can thus book the time slot successfully.

Initial slots

In the simplest of cases, a slot consists of just the start time and end time. We included a generated UUID in the data set for your convenience. You are free to adjust the data model if you feel the need to do so.

[
  ...
]


In order to run this app use

`yarn`

to install dependencies

and

`yarn dev`

to run the app
