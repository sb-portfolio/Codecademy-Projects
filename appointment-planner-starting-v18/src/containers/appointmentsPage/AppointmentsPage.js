import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts,appointments,setAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {<AppointmentForm 
              contacts={contacts}
              title={title}
              setTitle={setTitle}
              contact={contact}
              setContact={setContact}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              handleSubmit={handleSubmit}
          />}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};