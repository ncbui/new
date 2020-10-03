import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
// import SinglePageScroll from './SinglePageScroll';

import Footer from './Footer';
import Routes from './Routes';
import Navigation from './Navigation';

/** Renders App
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function App() {
  return (
      <div className="App">
        <Navigation />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
  );
}