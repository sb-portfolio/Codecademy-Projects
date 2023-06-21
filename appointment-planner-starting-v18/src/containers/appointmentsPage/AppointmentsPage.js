import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts,appointments,addNewAppointment}) => {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")   


  const handleSubmit = (e) => {
    e.preventDefault();

    addNewAppointment(name, contact, date, time)
    setName("")
    setContact("")
    setDate("")
    setTime("")
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {<AppointmentForm 
              contacts={contacts}
              title={name}
              setTitle={setName}
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
        {<TileList dataList={appointments}/>}
      </section>
    </div>
  );
};