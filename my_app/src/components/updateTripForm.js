// UpdateTripForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTrip } from "../features/tripsSlice";
import { RiCloseCircleLine } from "react-icons/ri";

const UpdateTripForm = ({ tripId,trip,onClose }) => {
  const [destination, setDestination] = useState(trip.destination);
  const [startDate, setStartDate] = useState(trip.startDate);
  const [endDate, setEndDate] = useState(trip.endDate);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTrip({ id: tripId, destination, startDate, endDate }));
    onClose();
  };

  const handleclick = ()=>{
    onClose();
  }

  return (
    <div className="update-form-container">
      <form className = "update-form" onSubmit={handleSubmit}>
      <RiCloseCircleLine size={40} color="red" className="closebutton" onClick={handleclick} />
      <h2>Update Trip</h2>
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button type="submit">Update Trip</button>
      </form>
    </div>
  );
};

export default UpdateTripForm;
