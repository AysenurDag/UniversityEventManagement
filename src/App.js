// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventListingPage from './pages/EventListingPage';
import EventDetailPage from './pages/EventDetailPage';
import EventCreationPage from './pages/EventCreationPage';
import './styles/App.css';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventListingPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/create-event" element={<EventCreationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
