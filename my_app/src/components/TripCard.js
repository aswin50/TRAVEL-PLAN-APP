import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTrip } from "../features/tripsSlice";
import AddActivityForm from "./AddActivityForm";
import ViewActivities from "./ViewActivities";
import UpdateTripForm from "./updateTripForm";


const TripCard = ({ trip }) => {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false);
  const [isViewActivitiesOpen, setIsViewActivitiesOpen] = useState(false);
  const [isupdateOpen, setisupdateOpen] = useState(false);
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTrip(trip.id));
   
  };

  return (
    <div className="trip-card">
      <div className="trips">
      <h2 style={{marginTop:"10px"}}>{trip.destination}</h2>
      <p>Start Date: {trip.startDate}</p>
      <p>End Date: {trip.endDate}</p>
      <div className="card_buttons">
      <button onClick={() => setIsAddActivityOpen(true)}>Add Activity</button>
      <button onClick={() => setIsViewActivitiesOpen(true)}>View Activities</button>
      <button onClick={() => setisupdateOpen(true)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
      </div>
      {isAddActivityOpen && (
        <AddActivityForm tripId={trip.id} onClose={() => setIsAddActivityOpen(false) }  />
      )}
      {isViewActivitiesOpen && <ViewActivities tripId={trip.id} tripdestination = {trip.destination}  onClose={() => setIsViewActivitiesOpen(false)}/>}
      {isupdateOpen &&
      <UpdateTripForm tripId={trip.id} trip = {trip} onClose={() => setisupdateOpen(false)}  />}
     
    </div>
  );

};

export default TripCard;
