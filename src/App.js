import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import PlanningApp from "./PlanningApp";

import Landing from "./Landing";


/** Renders App
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function App() {
  return (
      <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/">
      <Landing />
      </Route>
      <Route exact path="/planning">
      <PlanningApp />
      </Route>
      </Switch>
      </BrowserRouter>
      </div>
  );
}