export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="csz-footer custom-footer">
      <div className="footer-main">
        <div className="footer-section brand-section">
          <h2>CS-Ticket System</h2>
          <p>CS Ticket System empowering teams to resolve issues efficiently and improve customer satisfaction.</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><span className="dot" /> Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="footer-section social-section">
          <h4>Social Links</h4>
          <ul>
            <li><span className="icon email" /> @CS — Ticket System</li>
            <li><span className="icon linkedin" /> @CS — Ticket System</li>
            <li><span className="icon facebook" /> @CS — Ticket System</li>
            <li><span className="icon mail" /> support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} CS — Ticket System. All rights reserved.</span>
      </div>
    </footer>
  );
}
