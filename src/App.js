import React from "react";
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

/** Renders App
 * 
 * 
 *  App -> { SinglePageScroll }
 */
export default function App() {
  return (
      <div className="App">
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
  );
}