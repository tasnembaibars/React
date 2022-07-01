import React from "react";
import ContactCard from "./ContactCard";
function ContactList(props){
    console.log(props);
    const renderContactList=props.contacts.map((contact)=>{
        return(
          <ContactCard contact={contact}></ContactCard>
        );
    })
return( <>
<h2>{renderContactList}</h2>
</>)

}
export default ContactList;