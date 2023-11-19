import React from 'react';
import './App.css';
import MainPage from './MainPage';
import FormularAltTextsPage from './FormularAltTextsPage';
import Timeline from './Timeline'
import DetailsPage from './DetailsPage'
import ScoreExplanationPage from './ScoreExplanationPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
   return (
      <div className="App">

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/formular-alt-texts" element={<FormularAltTextsPage />} />
          <Route path="/score-explanation" element={<ScoreExplanationPage />} />
        </Routes>
    </div>
  );
      };

export default App;
