// import logo from './logo.svg';
import './App.css';
// import UserForm from './UserForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './hooks/Home';
// import CustomHook from './hooks/UseLogIn';
import UseLogIn from './hooks/UseLogIn';
import ProtectedRoute from './hooks/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
  
    <Routes>

      <Route  path='/login' element={ <UseLogIn />}/>
     
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
