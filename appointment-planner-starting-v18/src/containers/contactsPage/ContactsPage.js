import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addNewContact}) => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [nameAlreadyExists, setNameAlreadyExists] = useState(false)
  /*



In the Contacts section, render a TileList with the contact array passed via props
  */

  const handleSubmit = (e) => {
    e.preventDefault();

   if(nameAlreadyExists){
    console.log("Contact already exists")
    return
   }
   
    addNewContact(name, phone, email)
    setName("")
    setPhone("")
    setEmail("")
  };

  useEffect(() => {

    const contactAlreadyStored = contacts.some(contact => contact.name===name)

    setNameAlreadyExists(contactAlreadyStored)

  },[name])



  return (
    <div>
      <section>
        <h2>Add New Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        nameAlreadyExists={nameAlreadyExists}
      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {
          contacts.map(contact => {
            return <TileList contact={contact}/>
          })
        }
      </section>
      </div>
  );
};
