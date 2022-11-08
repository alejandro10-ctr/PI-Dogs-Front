import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/form' component={Form}/>  
        <Route path='/:id' component={Detail}/>   
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
