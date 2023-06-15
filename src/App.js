import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './jsx/Home';
import Complain from './jsx/Complain';
import Status from './jsx/Status';
import About from './jsx/About';
import Contact from './jsx/Contact';
import Login from './jsx/Login';

import Dashboard from './jsx/Dashboard';
import ComplainList from './jsx/ComplainList';
import Success from './jsx/Success';


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complainlist" element={<ComplainList/>}/>
        <Route path="/complain/success" element={<Success/>} />
      </Routes>
    </Router>
  );
};

export default App;
