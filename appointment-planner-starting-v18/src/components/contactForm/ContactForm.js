import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  nameAlreadyExists
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Enter Name: {nameAlreadyExists&&<span>Name Already Exist in Contacts</span>}</label>
        <input 
          type="text" 
          value={name}
          placeholder="Enter Name"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
        <label for="phone">Enter Phone Number: </label>
        <input 
          type="text" 
          value={phone}
          placeholder="Enter Phone"
          id="phone"
          onChange={(event) => setPhone(event.target.value)}
          pattern="	
          (\s*\(?0\d{4}\)?\s*\d{6}\s*)|(\s*\(?0\d{3}\)?\s*\d{3}\s*\d{4}\s*)"
        />
        <label for="name">Enter Email Address: </label>
        <input 
          type="email" 
          value={email}
          placeholder="Enter Email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />                
        <button type="submit">Add New Contact</button>
      </form>
    </>
  );
};

