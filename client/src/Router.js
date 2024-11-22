import React from 'react';
import App from './Pages/App';
import Edit from './Pages/Edit';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
        <Switch>
            <Route exact path={'/'} component={()=>App()}/>
            <Route exact path={'/edit/:id'} component={()=>Edit()}/>
        </Switch>
    </Router>
  )
}

export default Routers