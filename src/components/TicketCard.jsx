export default function TicketCard({ ticket, onSelect }) {
  const { id, title, description, customer, priority, createdAt } = ticket;
  const date = new Date(createdAt).toLocaleString();
  return (
    <article className="ticket-card" onClick={() => onSelect(ticket)} role="button" tabIndex={0}>
      <header className="ticket-head">
        <h3>{title}</h3>
        <span className={`priority p-${priority.toLowerCase()}`}>{priority}</span>
      </header>
      <p className="desc">{description}</p>
      <footer className="ticket-meta">
        <span className="customer">{customer}</span>
        <span className="date">{date}</span>
        <span className="id">{id}</span>
      </footer>
    </article>
  );
}

