
import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Skills from './pages/Skills'; 
import Contact from './pages/Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
     <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  ); 
};

export default App;

