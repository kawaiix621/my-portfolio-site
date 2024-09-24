import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landingpage from './components/Landingpage';
import Team from './components/Team';
import Whitepaper from './components/Whitepaper';
import Resume from './components/Resume'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
