import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
     <Navbar/>
     <Booklist/>
     <ThemeToggle/>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
