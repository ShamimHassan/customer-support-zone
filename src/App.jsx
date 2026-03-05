import { useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import TicketCard from './components/TicketCard.jsx';
import TaskStatus from './components/TaskStatus.jsx';
import Footer from './components/Footer.jsx';
import { initialTickets } from './data/tickets.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const remainingTickets = useMemo(
    () => tickets.filter((t) => !inProgress.find((p) => p.id === t.id)),
    [tickets, inProgress],
  );

  const handleSelectTicket = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.info('Ticket already in progress');
      return;
    }
    setInProgress((prev) => [...prev, ticket]);
    toast.success(`Added to In Progress: ${ticket.title}`);
  };

  const handleComplete = (id) => {
    const task = inProgress.find((t) => t.id === id);
    if (!task) return;
    setInProgress((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [task, ...prev]);
    setTickets((prev) => prev.filter((t) => t.id !== id));
    toast.success(`Marked Resolved: ${task.title}`);
  };

  const handleNewTicket = () => {
    toast.info('New Ticket creation coming soon');
  };

  return (
    <div className="csz-app">
      <Navbar onNewTicket={handleNewTicket} />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      <main className="csz-main">
        <section className="tickets" id="tickets" aria-label="Customer tickets">
          <h2>Customer Tickets</h2>
          <div className="tickets-grid">
            {remainingTickets.map((t) => (
              <TicketCard key={t.id} ticket={t} onSelect={handleSelectTicket} />
            ))}
          </div>
        </section>
        <TaskStatus inProgress={inProgress} resolved={resolved} onComplete={handleComplete} />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
