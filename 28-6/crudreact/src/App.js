import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import React,{useState,useEffect} from 'react';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const AddContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  };
  useEffect(()=>{
    const retrivecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrivecontacts) setContacts(retrivecontacts);
   },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
 
  return (
    <div className="App">
 <Head/>
 <AddContact AddContactHandler={AddContactHandler}/>
 <ContactList contacts={contacts}/>
 
    </div>
  );
}

export default App;
