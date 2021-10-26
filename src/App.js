import React from 'react'
import './App.css';
import {Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TicketsTestPage} />
      </Switch>
     
    </div>
  );
}

export default App;
