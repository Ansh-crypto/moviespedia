//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router,Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import MovieCard from './components/MovieCard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path ="/"  element={<HeroSection/>}/>
     <Route path="/movie/:id" element={<MovieCard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
