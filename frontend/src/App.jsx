// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/shared/sidebar'; // Adjust the path accordingly
// import Navbar from './components/shared/navbar';
import Home from './pages/home'
import TeamPage from './pages/TeamPage';
const App = () => {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams/*" element={<Sidebar />} />
          <Route path="/teams/:id" element={<TeamPage/>}/>
          {/* Add more routes here if needed */}
      </Routes>
  </Router>
    );
  }

export default App;
