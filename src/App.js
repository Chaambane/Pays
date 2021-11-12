import React from 'react';
import PaysManager from "./conteners/PaysManager/PaysManager";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DetailCountry from './conteners/DetailCountry/DetailCountry';
import Error404 from './components/Error404/Error404';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact render={() => <h1 className="fw-bold container text-primary">Accueil</h1>}/>
        <Route path="/pays" exact component={PaysManager}/>
        <Route path="/pays/:id" exact render={(props) => <DetailCountry nameCountry = {props.match.params.id} {...props}/>}/> 
        <Route component={Error404}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
