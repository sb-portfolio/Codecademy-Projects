import React from "react";

export const ContactPicker = ({contacts,handleChange,value}) => {
  return (
    <>
        <label for="contact">Select Contact:</label>
        <select 
          id="contact"
          onChange={handleChange}
          value={value}
        >
          <option value="">No Contact Selected</option>
          {contacts.map((contact,index) => {
            return <option key={index} value={contact.name}>{contact.name}</option>
          })}
        </select>
    </>
  );
};

