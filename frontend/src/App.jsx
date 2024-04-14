// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import TeamParent from './pages/TeamParent';
import SeasonParent from './pages/SeasonParent';
import Navbar from './components/shared/navbar';
const App = () => {
    return (
      <Router>
          <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams/*" element={<TeamParent />} />
          <Route path="/seasons/*" element={<SeasonParent />} />
          {/* Add more routes here if needed */}
      </Routes>
  </Router>
    );
  }

export default App;
