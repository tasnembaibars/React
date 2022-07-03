import './App.css';
import About from './components/About';
import Index from './components/Index';
import {BrowserRouter ,Route,Routes,Link} from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState } from 'react';
function App() {
  const [value,setValue]=useState('hello from context');
  return (
  //  <BrowserRouter>
  //  <Routes>
      <div>
   
       <UserContext.Provider value={{value,setValue}}>
     {/* <Route to="/" element={<Index/>}/>
     <Route to="/about" element={<About/>}/> */}
     <Index/>
     <About/>
        </UserContext.Provider>
      </div>

    //  </Routes>
    //   </BrowserRouter> 
   
  );
}

export default App;
