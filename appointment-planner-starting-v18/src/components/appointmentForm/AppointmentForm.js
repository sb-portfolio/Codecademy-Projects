import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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

  return (
      <form onSubmit={handleSubmit}>
        <label for="title">Enter Title: </label>
        <input 
          type="text" 
          value={title}
          placeholder="Enter Title"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label for="date">Enter Date: </label>
        <input 
          type="date" 
          value={date}
          placeholder="Enter Date"
          id="date"
          onChange={(event) => setDate(event.target.value)}
  
        />
        <label for="time">Enter Time: </label>
        <input 
          type="time" 
          value={time}
          placeholder="Enter Time"
          id="time"
          onChange={(event) => setTime(event.target.value)}
        />                
        <button type="submit">Add New Contact</button>
      </form>
  );
};
