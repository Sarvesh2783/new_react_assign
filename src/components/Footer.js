import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://github.com" className="social-link">
              <i>GitHub</i>
            </a>
            <a href="https://linkedin.com" className="social-link">
              <i>LinkedIn</i>
            </a>
            <a href="https://twitter.com" className="social-link">
              <i>Twitter</i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <p>A React-based blog platform showcasing posts with modern UI and responsive design.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} React Posts. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 