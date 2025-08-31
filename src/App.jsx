import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EsportsNews from './pages/EsportsNews';
import Tournaments from './pages/Tournaments';
import TechEvents from './pages/TechEvents';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import SponsorDashboard from './pages/dashboards/SponsorDashboard';
import CreatorDashboard from './pages/dashboards/CreatorDashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<EsportsNews />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/tech-events" element={<TechEvents />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/sponsor" element={<SponsorDashboard />} />
            <Route path="/dashboard/creator" element={<CreatorDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;