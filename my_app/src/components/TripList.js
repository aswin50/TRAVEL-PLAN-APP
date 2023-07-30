import React from "react";
import { useSelector } from "react-redux";
import TripCard from "./TripCard";

const TripList = () => {

  const trips = useSelector((state) => state.trips.trips);
console.log(trips)

  return (
    <div className="trip-list">
      <h1>Trips</h1>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
      
      
};

export default TripList;
