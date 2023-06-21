import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};


// Render a form with:

// A ContactPicker component with the contacts list passed in via props

// Use getTodayString() to set the min attribute of the date input

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  function handleChange(event){
    setContact(event.target.value)
  }
  

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter Title: </label>
        <input 
          type="text" 
          value={title}
          placeholder="Enter Title"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <ContactPicker 
          contacts={contacts}
          handleChange={handleChange}
          value={contact}
        />
        <label htmlFor="date">Enter Date: </label>
        <input 
          type="date" 
          value={date}
          placeholder="Enter Date"
          id="date"
          onChange={(event) => setDate(event.target.value)}
          min={getTodayString()}
        />
        <label htmlFor ="time">Enter Time: </label>
        <input 
          type="time" 
          value={time}
          placeholder="Enter Time"
          id="time"
          onChange={(event) => setTime(event.target.value)}
        />                
        <button type="submit">Add New Appointment</button>
      </form>
  );
};
