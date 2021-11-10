import React from 'react';
import PaysManager from "./conteners/PaysManager/PaysManager";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1 className="fw-bold container text-primary">Accueil</h1>}/>
        <Route path="/pays"  element={<PaysManager/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
