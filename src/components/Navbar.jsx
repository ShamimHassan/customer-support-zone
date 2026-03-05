export default function Navbar({ onNewTicket }) {
  return (
    <header className="csz-navbar csz-navbar--elevated">
      <div className="brand">
        <span className="name">CS — Ticket System</span>
      </div>
      <nav className="nav-actions">
        <a href="#">Home</a>
        <a href="#faq">FAQ</a>
        <a href="#changelog">Changelog</a>
        <a href="#blog">Blog</a>
        <a href="#download">Download</a>
        <a href="#contact">Contact</a>
        <button type="button" onClick={onNewTicket} className="btn-primary btn-pill">
          <span className="btn-icon">+</span> New Ticket
        </button>
      </nav>
    </header>
  );
}
