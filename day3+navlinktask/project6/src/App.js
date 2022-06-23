import logo from './logo.svg';
import Contact from './component/Contact';
import Nav from './component/Nav';
import About from './component/About';
import Home from './component/Home';
import './App.css';
import {BrowserRouter , Routes,Route,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
   
    <Routes>
    <Route path='Home' element={<Home/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='About' element={<About/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
