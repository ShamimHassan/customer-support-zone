export default function TaskStatus({ inProgress, resolved = [], onComplete }) {
  return (
    <aside id="status" className="task-status">
      <h2>Task Status</h2>
      {inProgress.length === 0 ? (
        <p className="empty">No tickets in progress.</p>
      ) : (
        <ul className="task-list">
          {inProgress.map((t) => (
            <li key={t.id} className="task-item">
              <span className="title">{t.title}</span>
              <button className="btn-success" onClick={() => onComplete(t.id)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="resolved" id="resolved" aria-label="Resolved tickets">
        <h2>Resolved Task</h2>
        {resolved.length === 0 ? (
          <p className="empty">No resolved tickets yet.</p>
        ) : (
          <ul className="resolved-list">
            {resolved.map((t) => (
              <li key={t.id}>
                <span className="title">{t.title}</span>
                <span className="meta">{t.customer} • {t.priority}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

