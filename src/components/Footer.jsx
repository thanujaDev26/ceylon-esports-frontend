const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-text">GameHub</h3>
            <p>Your ultimate destination for gaming news, tournaments, and community.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/news">Esports News</a></li>
              <li><a href="/tournaments">Tournaments</a></li>
              <li><a href="/tech-events">Tech Events</a></li>
              <li><a href="/sponsors">Sponsors</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Twitch</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ceylon eSports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;