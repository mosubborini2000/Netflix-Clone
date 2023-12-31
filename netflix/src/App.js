import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import FavList from './components/FavList '

function App() {
  return (
    <div
      className="App">
        <NavBar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList/>} />

        
    </Routes>

    </div>
  );
}

export default App;
