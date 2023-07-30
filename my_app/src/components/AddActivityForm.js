import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "../features/tripsSlice";
import { RiCloseCircleLine } from "react-icons/ri";


const AddActivityForm = ({ tripId, onClose}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
     alert("please enter title")
     return
    }

    if (!description.trim()) {
      setDescriptionError("Description is required");
      return;
    }
    const activity_id = Math.floor(Math.random()*100)
    dispatch(addActivity({ tripId,activity_id, title, description}));
    setTitle("");
    setDescription("");
    onClose();
  };
console.log(descriptionError)
  const handleclick = ()=>{
    onClose();
  }
 
  return (
    <div className="activity-form-container">
      
      <form className="activity-form" onSubmit={handleSubmit}>
      <RiCloseCircleLine size={40} color="red" className="closebutton" onClick={handleclick} />
      <h1 className="activity">Activity</h1>
  
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {setTitle(e.target.value);setTitleError("")}}
          required
        />
       {titleError && <p className="error">{titleError}</p>}
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => {setDescription(e.target.value); setDescriptionError("")}}
          required
        />
         {descriptionError && <p className="error">{descriptionError}</p>}
        <button type="submit">Add Activity</button>
      </form>
      
    </div>
  );
};

export default AddActivityForm;

