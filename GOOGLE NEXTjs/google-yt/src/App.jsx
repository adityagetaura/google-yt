import React from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage.jsx';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
