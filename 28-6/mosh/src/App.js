import logo from './logo.svg';
import './App.css';
// import Statehooks from './Statehooks';
// import CartHook from './CartHook';
// import Nav from './Nav';
// import Mosh from './Mosh';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
     {/* <Statehooks/> */}
     {/* <Nav/>
     <CartHook/> */}
    {/* <Mosh/> */}
    <GlobalProvider>
    <Router>
    
      <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/add" component={AddUser} />
    <Route path="/edit/:id" component={EditUser} />
    
    </Switch>
    </Router>
    </GlobalProvider>
    </div>
  );
}

export default App;
