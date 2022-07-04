import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
// import MovieList from './component/MovieList';
import Movies from './component/Movies';
import Single from './component/Single';
import './style.css';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/about' element={<About/>}  />
    {/* <Route path='list' element={<MovieList/>}  /> */}
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/single/:id' element={<Single/>}  />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
