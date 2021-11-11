import React from 'react';
import PaysManager from "./conteners/PaysManager/PaysManager";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DetailCountry from './conteners/DetailCountry/DetailCountry';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/" exact render={() => <h1 className="fw-bold container text-primary">Accueil</h1>}/>
      <Route path="/pays" exact component={PaysManager}/>
      <Route path="/pays/:id" render={(props) => <DetailCountry nameCountry = {props.match.params.id} {...props}/>}/> 
    </BrowserRouter>
  )
}

export default App;
