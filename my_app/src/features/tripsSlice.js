import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
  name: "trips",
  initialState:{
    trips:[],
    activities:[],
  },
  reducers:{
    addTrip: (state, action) => {
      state.trips.push(action.payload);

    },
    updateTrip: (state, action) => {
      const { id, destination, startDate, endDate } = action.payload;
      console.log(id)
      const trip = state.trips.find((trip) => trip.id === id);
      console.log(trip);
      if (trip) {
        trip.destination = destination;
        trip.startDate = startDate;
        trip.endDate = endDate;
      }
    },
    deleteTrip: (state, action) => {
      console.log(action.payload)
       state.trips = state.trips.filter((trip) => trip.id !== action.payload);
      
    },
    addActivity: (state, action) => {
      const { activity_id,tripId, title, description} = action.payload;
      console.log(tripId);
      const trip = state.trips.find((trip) => trip.id === tripId);
      if (trip) {
       state.activities.push({activity_id,tripId, title, description });
        //console.log(activities)
      }
    },
    deleteActivity: (state, action) => {
      console.log(action.payload)
       state.activities = state.activities.filter((activity) => activity.activity_id !== action.payload);
      
    },
  },
});

export const { addTrip, updateTrip, deleteTrip, addActivity,deleteActivity } = tripsSlice.actions;

export default tripsSlice.reducer;
