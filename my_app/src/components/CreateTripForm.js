import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../features/tripsSlice";


const CreateTripForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destination || !startDate || !endDate) {
      alert("All fields are required");
      return;
    }
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (startDateObj >= endDateObj) {
      alert("Start date must be before end date");
      return;
    }
    const id = Math.floor(Math.random()*100)
    console.log(id);
    dispatch(addTrip({id, destination, startDate, endDate }));
    setDestination("");
    setStartDate("");
    setEndDate("");
   
  };
   
  return (
    <div className="create-trip-form">
        <h1 style={{textAlign:"center"}}>Create Trip</h1>
      <form onSubmit={handleSubmit}>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
};

export default CreateTripForm;
