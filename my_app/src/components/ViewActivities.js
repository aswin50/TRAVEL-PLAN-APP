import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import {deleteActivity} from "../features/tripsSlice"

const ViewActivities = ({ tripId,tripdestination,onClose }) => {
  const trips = useSelector((state) => state.trips.activities);
  console.log(trips)
  const dispatch = useDispatch()
  
  const currentTrip = trips.filter((trip) => trip.tripId === tripId);
 // console.log(currentTrip.activity_id)

  if (!currentTrip) {
    return <p>Trip not found.</p>;
  }
  const handleclick = ()=>{
    onClose();
  }

  const deleteactivity = (activity)=>{
  // console.log(activity.activity_id)
      const activityId = activity.activity_id;
    dispatch(deleteActivity(activityId))
  }

  return (
    <div>
        <div className="activity-list">
       < div className="activity-item">
       <RiCloseCircleLine size={40} color="red" className="closebutton" onClick={handleclick} />
        <h1>{tripdestination}</h1>
          {currentTrip.map((activity,index) => (
            <div key={index} className="activity_card">
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <button onClick ={()=>deleteactivity(activity)}>Delete</button>
            </div>
          ))}
         
        </div>
        </div>
    </div>
  );
  
};

export default ViewActivities;
