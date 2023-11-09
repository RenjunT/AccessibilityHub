import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import Timeline from './Timeline';

function Root() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default Root;